import { useState, useEffect } from "react"
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css"

export default function Getdata(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=> res.json())
        .then((data)=> {
            setData(data);
            setLoading(false)
        })
        .catch((err)=>{
            setError(err)
            setLoading(false)
        })
    },[])


    if (loading) {
        return <div className="d-flex justify-content-center mt-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return data ? <Card data={data} /> : <div>No data available</div>;

}