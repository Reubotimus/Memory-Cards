import React, { useEffect, useState } from "react";
import "./MemoryCard.css"

export default function MemoryCard({id, onCardClick}) {
    let [name, setName] = useState("");
    let [image, setImage] = useState("")
    useEffect(() => {
        if (name == "") {
            fetch('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(results => results.json())
                .then(data => {
                    setName(data.name)
                    setImage(data.sprites.front_default)
                });
        }
    }, [id])
    return (
            <div className="memory-card" onClick={() => onCardClick(id)}>
                <img src={image} alt={"image of " + name}/>
                <div className="pokemon-name">{name}</div>
            </div>
        )
}