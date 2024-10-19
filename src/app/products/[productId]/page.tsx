import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    };
}


export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    return{
        title: `Products ${title}`
    }
}

export default function ProductsDetail({params}:Props) {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <h1>Details About Products {params.productId}</h1>
           
        </div>
    )
}