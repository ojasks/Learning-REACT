import {useState, useEffect} from 'react'

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])  // jab bhi currencty me change ho useEffect will again call the api
    console.log(data)
    return data
}
export default useCurrencyInfo;

//useCurrencyInfo returns the whole funtion by exporting
//and inside it i used a hook to return whole of the data