import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Get the recipe ID from the route

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  console.log(data && data);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="row p-4">
        <div className="col-md-6 span-2">
          <img
            className="w-100"
            src={`${data.image}`}
            alt="img of food"
          />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-12">
              <h1>{data.name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                nemo magni in exercitationem sequi temporibus dignissimos.
                Nesciunt ipsa culpa quis nam eaque tempore veritatis, inventore
                consequuntur ea. Aspernatur, quaerat nesciunt.
              </p>
            </div>
            <div className="col-12">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Serving : {data.servings  }</li>
                <li className="list-group-item">Calories Per Saving : {data.caloriesPerServing}</li>
                <li className="list-group-item">cooking Time : {data.cookTimeMinutes} Minutes</li>
                <li className="list-group-item">cuisine : {data.cuisine}</li>
                <li className="list-group-item">difficulty : {data.difficulty}</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="col-md-6">
          <h1>Method</h1>
          <ul>
            {data.instructions.map((val, ind) => (
              <li key={ind}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h1>Ingredients</h1>
          <ul>
            {data.ingredients.map((val, ind) => (
              <li key={ind}>{val}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
