import { ProductItem, ProductListContainer } from '@/components/Listagem'
import Link from 'next/link';

export async function getStaticProps() {
  const products = await fetch('https://fakestoreapi.com/products'
  ).then((res) => res.json());
  const date = new Date();
  return {
    props: {
      products,
      lastRender: date.getSeconds(),
    },
    revalidate: 5,
  }
}

const ProductList = (props: any) => {
  return (
    <div>
      <div>{props.lastRender}</div>
      {props.products.map((product: any) => (
        <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }} >
          <ProductListContainer id='product-list-container'>
            <ProductItem id='product-item'>
              <img src={product.image} alt={product.title} style={{ width: '50px' }} />
              <div style={{ paddingLeft: '15px' }}>{product.title}</div>
            </ProductItem>
          </ProductListContainer>
        </Link>
      ))}
    </div>
  )
}

export default ProductList;