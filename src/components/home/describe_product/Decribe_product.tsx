import Image from 'next/image';

export default function DescribeProduct() {
    return (
        <>
            <div className="w-fullh-[650px] mt-24 px-10 flex items-center">
                <div className="w-11/12 mx-auto">
                    <div className="grid grid-cols-2 gap-6 items-center justify-center">
                        <div className="flex flex-col justify-center w-2/3">
                            <h2 className="text-4xl text-black font-bold uppercase">Sản phẩm tốt nhất</h2>
                            <p className="text-black text-justify mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A tempora ratione eligendi fugiat reiciendis velit vel quia obcaecati, eos tempore, delectus perferendis. Consequuntur libero corrupti quasi et voluptates, itaque distinctio deleniti aliquam explicabo. Neque excepturi odit dolorem maiores eligendi accusamus temporibus ratione ullam doloribus perspiciatis!</p>
                            <button className="bg-black w-1/4 border  border-black hover:bg-white hover:text-black text-white px-2 py-2.5 mt-4 transition duration-150 ease-in-out">Xem thêm</button>
                        </div>
                        <div className="shadow-xl">
                            <Image src="https://muabanson.vn/wp-content/uploads/2022/05/uu-nhuoc-diem-cua-son-dulux-7.jpg" alt="Sơn nhà Dulux" width="500" height="500" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[650px] mt-24 px-10 flex items-center">
    <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2 gap-6 items-center justify-between">
            <div className="shadow-xl">
                <Image src="https://ximangsunrise.vn/wp-content/uploads/2023/09/banner-web-3-1-1.png" alt="Sơn nhà Dulux" width="500" height="500" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center items-end w-full pr-0">
                <h2 className="text-4xl text-black font-bold uppercase">Hãng được ưa thích nhất</h2>
                <p className="text-black text-justify w-2/3 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A tempora ratione eligendi fugiat reiciendis velit vel quia obcaecati, eos tempore, delectus perferendis. Consequuntur libero corrupti quasi et voluptates, itaque distinctio deleniti aliquam explicabo. Neque excepturi odit dolorem maiores eligendi accusamus temporibus ratione ullam doloribus perspiciatis!</p>
                <button className="bg-black w-1/6 border border-black hover:bg-white hover:text-black text-white px-2 py-2.5 mt-4 transition duration-150 ease-in-out">Xem thêm</button>
            </div>
        </div>
    </div>
</div>

        </>
    )
}