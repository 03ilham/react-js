import React, { useState } from "react";
import CardProduct from "./CardProduct";

export default function ProductList() {
  const listOfProduct = [
    { id: 1, Name: "Asus", Price: 1500, Likes: 5, DisLikes: 0 },
    { id: 2, Name: "Dell", Price: 2500, Likes: 15, DisLikes: 0 },
    { id: 3, Name: "Mack Book", Price: 3500, Likes: 25, DisLikes: 0 },
  ];

  const [products, setProduct] = useState(listOfProduct);

  const onLikes = (id) => {
    //alert("prodid :" + id)
    setProduct([
      ...products.map((prod) => {
        if (prod.id === id) {
          prod.Likes = prod.Likes + 1;
          return prod;
        } else {
          return prod;
        }
      }),
    ]);
  };

  const onDisLikes = (id) => {
    setProduct([
      ...products.map((prod) => {
        if (prod.id === id) {
          prod.DisLikes = prod.DisLikes + 1;
          return prod;
        } else {
          return prod;
        }
      }),
    ]);
  };

  return (
    <div>
      {products &&
        products.map((prod) => {
          return (
            <li>
              <CardProduct
                id={prod.id}
                Name={prod.Name}
                Price={prod.Price}
                Likes={prod.Likes}
                DisLikes={prod.DisLikes}
                onLikes={onLikes}
                onDisLikes={onDisLikes}
              />
              {/* <p>prductId:{prod.id}</p>
                            <p>Name : {prod.Name}</p>
                            <p>Price : {prod.Price}</p>
                            <p>Likes : {prod.Likes}</p> */}
            </li>
          );
        })}
    </div>
  );
}
