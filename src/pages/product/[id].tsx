import useSWR from 'swr';

export async function getStaticPaths() {

    const product = await fetch(
        'https://fakestoreapi.com/products'
    ).then((res) => res.json());

    const paths = product.map((item: any) => ({
        params: {
            id: String(item.id)
        }
    }));

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }: any) {
    const product = await fetch(`https://fakestoreapi.com/products/${params.id}`
    ).then((res) => res.json());
    return {
        props: {
            product,
        }
    }
}

const Static = ({ product }: { product: any }): any => {

    const { data } = useSWR('https://fakestoreapi.com/products',
        (...arg) => fetch(...arg)
            .then(res => res.json()));

    return (
        <div>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>{product.category}</div>
            <div>{data?.find((item: any) => item.id === product.id).price}</div>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
        </div>
    )
}

export default Static;