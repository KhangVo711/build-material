import { Metadata } from "next"
import ImageSlider from '../../components/products/slider/slider'
import AllProduct from "@/components/products/allproduct/AllProduct";

export const metadata: Metadata = {
    // title: {
    //   absolute: "Products",
    // },
    title: "Products"
  };

export default function ProductsPage() {
    return (
        <div className="min-h-screen text-gray-900">
            <ImageSlider/>
            <AllProduct/>
        </div>
    )
}