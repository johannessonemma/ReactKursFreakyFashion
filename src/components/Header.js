import React from 'react';
import Search from './Search';

let menuItemList = [
    { name: "Nyheter", url: "#" },
    { name: "Kategorier", url: "#" },
    { name: "Topplistan", url: "#" },
    { name: "Rea", url: "#" },
    { name: "Kampanjer", url: "#" },
    { name: "Varumärken", url: "#" },
    { name: "Shop", url: "#" },
    { name: "Instagram", url: "#" },
]

function Header() {
    return (
       <header>
           <div className="container">

           <img src="https://via.placeholder.com/300x80?text=Logotype" alt="Logotype-text" /> 
           <Search />
           {/* <div> Search: </div> */}
          
            <div>
            <ul className="list-inline">
                {menuItemList.map(menuItem => (
                    <li class="list-inline-item">
                    <a href={menuItem.url}>{menuItem.name} </a>
                </li> 
                ))}
            </ul>
            </div>

            </div>
            
        </header>
    )
}

export default Header;