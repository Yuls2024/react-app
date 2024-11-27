import Product from './Product'

const Main =({products}) => {
    return (
        <main className="gap-4 p-4 flex flex-1 flex-wrap justify-center ">
            /*products will be listed here*/
            {
             products.map((product, i)=> (
                <Product product={product} />
             )
            )
            }
        </main>
    )
}

export default Main;

/*export default function Main(){
    return (
        <main>
            //products will be listed here
        </main>
    )
}*/