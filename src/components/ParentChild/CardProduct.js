import React from "react";

export default function CardProduct(props) {
  return (
    <div>
      <p>prductId:{props.id}</p>
      <p>Name : {props.Name}</p>
      <p>Price : {props.Price}</p>
      <p>Likes : {props.Likes}</p>
      <p>DisLike : {props.DisLikes}</p>
      <button onClick={()=>props.onLikes(props.id)}>Likes</button>
      <button onClick={()=>props.onDisLikes(props.id)}>DisLikes</button>
    </div>
  );
}
