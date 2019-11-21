import React from 'react';

let shoppingList = [
    { name: "Vinterjackor", url:"#"},
    { name: "Pufferjackor", url:"#"},
    { name: "Kappor", url:"#"},
    { name: "Trenchcoats", url:"#"},

]


function Footer() {
        return (
            <footer className="container">
                <p> This is the footer </p>
                <div className="container">
                    <p> Shopping </p>
                    
                    <ul className="list">
                        {shoppingList.map(menuItem => (
                            <li class="list">
                         <a href={menuItem.url}>{menuItem.name} </a>
                    </li> 
                    ))}
                    </ul>

                    <p> Mina sidor </p>
                    <ul className="list">
                        {shoppingList.map(menuItem => (
                            <li class="list">
                         <a href={menuItem.url}>{menuItem.name} </a>
                    </li> 
                    ))}
                    </ul>
                    
                    <p> Kundtjänst </p>
                    <ul className="list">
                        {shoppingList.map(menuItem => (
                            <li class="list">
                         <a href={menuItem.url}>{menuItem.name} </a>
                    </li> 
                    ))}
                    </ul>
                </div>
            </footer>
        )
}

export default Footer;