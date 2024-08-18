import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Card(props){
  const recipes = props.data.recipes
  console.log(recipes);
  const tagColors = ["primary","secondary","success","danger","warning","info","dark"]
  
    return (
      <>
      <div className= 'd-flex flex-wrap gap-4 p-4 justify-content-center bg-dark'>
      {recipes.map((data)=>( 
        <div className="card shadow" style={{width: "18rem"}} key={data.id}>
          <img src={data.image} className="card-img-top" alt="Card image cap" />
          <div className="card-body d-flex flex-column justify-content-between">
            <div className="mb-2">
            <h5 className="card-title" style={{color:"#633b2d"}}>{data.name}</h5>
            <p className="card-text">
            {data.tags.map((tag, ind)=>(
             <span className={`badge m-1 text-bg-${tagColors[ind % data.ingredients.length]}`} key={ind}>{tag}</span>
            ))
            }
            </p>
            </div>
            <div>
            <button className="btn btn-warning fw-bold">
             <Link to={`product/${data.id}`} style={{textDecoration: "none", color: "black"}}  > check item </Link> 
            </button>
            </div>
          </div>
        </div>
      ))}
      </div>
      </>
    );
}