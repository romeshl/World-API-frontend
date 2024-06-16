import { useState, useEffect } from 'react';


export default function Countries() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await ((await fetch('https://world-api-backend.azurewebsites.net/')).json());
            setData(response);
        }
        catch (error) {
            console.log("Error occured :" + error);
            setData([]);
        }
    }
    return (
        <>
            <div className='my-[100px] mx-auto w-[500px] p-[20px] border font-mono'>
                <h1 className="text-red-500 text-5xl underline">Countries</h1>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="flex gap-3">
                            <h1>{index + 1}</h1>
                            <p>{item.Name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}