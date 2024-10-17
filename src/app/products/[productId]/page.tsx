export default function ProductsDetail({params}:{params: {productId:string}}) {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <h1>Details About Products {params.productId}</h1>
           
        </div>
    )
}