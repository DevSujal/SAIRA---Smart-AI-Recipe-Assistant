import React from 'react'

const PopularCategories = (props) => {
    return (
        <div key={props.index} className=" group relative">
            <div className="group-hover:rounded-xl rounded-full ease-in-out duration-500 transition-all  overflow-hidden w-52 h-52">

                <img src={props.image} alt="" className="w-52 h-52 object-cover " />
            </div>
            <div className="absolute group-hover:rounded-xl rounded-full text-white text-lg   top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:bg-opacity-0 ease-in-out duration-500 transition-all">

                <div className="group-hover:translate-y-28 mt-24 text-center group-hover:text-left  group-hover:text-black">
                    <h1 className="text-white font-semibold text-xl group-hover:text-black ease-in-out duration-500 transition-all ">{props.title}</h1>
                    <p className="text-sm group-hover:opacity-100 opacity-0 ease-out duration-500 transition-all">{props.description}</p>
                </div>

            </div>
        </div>
    )
}

export default PopularCategories