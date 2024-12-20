import React from "react";

function Card(props) {

  return (
      <div class="card1">
        <div class="circle">
          <img src={props.img} alt="" />
        </div>
        <h3>{props.title}</h3>
        <p class="nameplate_card">{props.description}</p>
      </div>
  );
}

export default Card;
