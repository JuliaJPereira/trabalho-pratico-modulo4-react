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
        <ProductListContainer id='product-list-container'>
          <ProductItem id='product-item'>
            <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }} >
              {product.title}
            </Link>
          </ProductItem>
        </ProductListContainer>
      ))}
    </div>
  )
}

export default ProductList;