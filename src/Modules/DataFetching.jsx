import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const responce = await fetch("https://dummyjson.com/products");
            let mydata = await responce.json();
            let products = mydata.products
            console.log(products)
            setData(products)
        }
        getData();
    })
    return (
        <div className='d-flex flex-wrap'>
            {
                data.map((e) => (
                        <div className='bg-info border'>
                        <img src={e.images} style={{width:'300px'}}  alt="" />
                        <p>{e.id}</p>
                        <p>{e.brand}</p>
                        <p>{e.category}</p>
                        
                    </div>
                ))

            }
        </div>
    )
}

export default DataFetching