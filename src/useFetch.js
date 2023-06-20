///custom hook

import { useState, useEffect } from "react";
const useFetch = (url) => {

    

    const [data, setData] = useState(null
        // [
        // {title: 'My new Website', body: 'lorem ispum...', author: 'rehan', id: 1},
        // {title: 'Welcome apparty!', body: 'lorem ispum...', author: 'raza', id: 2}, 
        // {title: 'My new Website', body: 'lorem ispum...', author: 'rehan', id: 3}
        // ]
    );

    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        // console.log(res)
                        throw Error(' could not fetch the data for this resource');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false)
                    setError(null);


                })

                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    }
                    else {
                        // console.log(err.message);
                        setIsPending(false);
                        setError(err.message);

                    }
                })
        }, 1000);


        return () => {
            console.log("clean up");
            abortCont.abort();
        }










        // console.log('use filter ran');
        // console.log(n ame);
    }, [url]);
    // if you have to render the hook only one time than pass the empty dependacy array after useEffect Hook.

    return { data, isPending, error }

}

export default useFetch;