import useSWR from 'swr';

function ProductPrice() {
    const { data, error } = useSWR('https://fakestoreapi.com/products',
        (...arg) => fetch(...arg)
            .then(res => res.json()))

    if (error) {
        return <div>Erro: Deu ruim</div>
    }

    if (!data) {
        return <div>Carregando...</div>
    }

    return (
        <div>
            {data.map((product: any) => (
                <div>{product.price}</div>
            ))}
        </div>
    )
}

export async function getStaticPaths() {

    const product = await fetch(
        'https://fakestoreapi.com/products'
    ).then((res) => res.json());

    const paths = product.map((item: any) => ({
        params: {
            id: item.id
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

    return (
        <div>
            <ProductPrice />
            <div>{product[0].name}</div>
        </div>
    )
}

export default Static;