import React from 'react';


let smallspotlist = [
    {name: "Jacka", src: "../images/kladdkaka.jpg"},
    {name: "Kladdmuffins", src: "../images/kladdkaka.jpg"}
]

function Smallspotlist() {
    return(
        <div className="container">

            <div className="container">
                {smallspotlist.map(smallspot => (
                    <img src={smallspot.src} class="rounded float-left" alt={smallspot.name} ></img>
                ))}
            </div>
        </div>
    )
}

export default Smallspotlist;