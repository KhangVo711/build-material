export default function ReviewsDetail({params}:{params: {productId:string, reviewId:string}}) {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <h1>Reviews {params.reviewId} For Products {params.productId}</h1>
           
        </div>
    )
}