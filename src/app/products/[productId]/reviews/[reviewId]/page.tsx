"use client"
import { notFound } from "next/navigation"
function getRandomInt(count:number) {
    return Math.floor(Math.random() * count);
}
export default function ReviewsDetail({params}:{params: {productId:string, reviewId:string}}) {
    // const random = getRandomInt(2);
    // if(random === 1){
    //     throw new Error("Error loading reviews");
    // }
    if(parseInt(params.reviewId) > 1000){
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <h1>Reviews {params.reviewId} For Products {params.productId}</h1>
           
        </div>
    )
}