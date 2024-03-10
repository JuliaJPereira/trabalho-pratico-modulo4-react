import { ProductItem, ProductListContainer } from '@/components/Listagem'
import useSWR from 'swr';

// export default function ProductList() {
//     const { data, error } = useSWR('https://fakestoreapi.com/products',
//         (...arg) => fetch(...arg)
//             .then(res => res.json()))

//     if (error) {
//         return <div>Erro: Deu ruim</div>
//     }

//     if (!data) {
//         return <div>Carregando...</div>
//     }

//     return (
//         <div>
//             {data.map((product: any) => (
//                 <ProductListContainer id='product-list-container'>
//                     <ProductItem id='product-item'>{product.title}</ProductItem>
//                 </ProductListContainer>
//             ))}
//         </div>
//     )
// }

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
          <ProductItem id='product-item'>{product.title}</ProductItem>
        </ProductListContainer>
      ))}
    </div>
  )
}

export default ProductList;