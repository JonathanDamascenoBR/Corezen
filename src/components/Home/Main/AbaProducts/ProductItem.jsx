function ProductItem({ item }) {

    return (

        <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="border-b border-slate-800 bg-slate-950/40 backdrop-blur-md gap-4 border shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-evenly items-center hover:bg-white/5"
        >

            <img
                className="w-screen object-contain p-4 hover:scale-110 transition duration-500"
                src={item.img}
                alt={item.name}
            />

            <div className="p-4 flex flex-col w-full">

                <div className="bg-gray-400 h-[1px]" />

                <h3 className="text-lg font-semibold text-gray-300 line-clamp-2 min-h-[60px]">
                    {item.name}
                </h3>

                <div className="bg-gray-400 h-[1px]" />

                <p className="mt-3 text-md font-bold line-through text-gray-500">
                    {item.lastPrice}
                </p>

                <p className="mt-3 text-2xl font-bold text-green-500">
                    {item.price}
                </p>
            </div>

        </a>

    );

}

export default ProductItem;