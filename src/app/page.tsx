import Banner from '@/components/home/banner/banner';
import NewProduct from '@/components/home/new_product/NewProduct';
import BestSellProduct from '@/components/home/bestSell_product/BestSellProduct';
import ProductIntro from '@/components/home/product_intro/ProductIntro';
import DecribeProduct from '@/components/home/describe_product/Decribe_product';
import ContactPreFooter from '@/components/home/contact_pre_footer/ContactPreFooter';
import HomeProduct from '@/components/home/home_product/HomeProduct';
export default function Home() {
  
  return (
    <div>
      <Banner />
      <NewProduct />
      <ProductIntro />
      <HomeProduct />
      <BestSellProduct />
      <DecribeProduct />
      <ContactPreFooter />
    </div>

  );
}
