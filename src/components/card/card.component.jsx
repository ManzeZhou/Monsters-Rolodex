import { Component } from "react";
import './card.style.css';

const Card = ({ monster }) =>  {
const {id, email, name} = monster


        return (
            <div key={id} className="card-container">
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>


        )

}

export default Card;


