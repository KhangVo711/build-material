export default function NotFound() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center max-w-xl w-full p-4">
          <div className="relative h-40 leading-[150px] mb-6">
            <h1 className="font-bold text-[186px] bg-clip-text text-transparent bg-cover bg-center" style={{ backgroundImage: 'url("/img/text.jpg")' }}>
              404
            </h1>
          </div>
          <h2 className="font-bold text-2xl">Oops! This Page Could Not Be Found</h2>
          <p className="uppercase font-medium text-sm mb-0">Sorry but the page you are looking for does not exist, has been removed, name changed or is temporarily unavailable.</p>
          <a href="/" className="mt-6 inline-block uppercase bg-blue-500 text-white font-bold py-2 px-10 text-sm rounded-sm hover:opacity-80 transition duration-200">
            Go To Homepage
          </a>
        </div>
      </div>
    );
  }
  