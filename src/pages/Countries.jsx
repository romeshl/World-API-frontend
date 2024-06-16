import useSWR from 'swr';

export default function Countries() {

    //const fetcher = url => fetch(url).then(r => r.json());

//    function fetcher(url){
//        return fetch(url) 
//            .then(response => response.json())
//            .then(data);
//     }
    
    async function fetcher(url) {
        return await (await fetch(url)).json();
    }

    // async function fetcher(url) {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // }

    const { data, error, isLoading } = useSWR('https://world-api-backend.azurewebsites.net/', fetcher);
    
    return (
        <>
            <div className='my-[100px] mx-auto w-[500px] p-[20px] border font-mono'>
                {isLoading ?
                    <h1>Loading countries data ...</h1>
                    :
                    error ?
                        <h1>Error occurred while loading data. Error code:</h1>
                        :
                        data ?
                            <div>
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
                            :
                            <h1>No data to display.</h1>
                }
            </div>
        </>
    )
}