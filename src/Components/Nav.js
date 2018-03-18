import React from 'react';

const NavBar = (props) => {
    let linkList = props.links.map((link, i) => <button key={i}onClick={() => props.imageSearch(link.name)}>{link.name}</button>)
    
    return (
        <div>
            {linkList}
        </div>
    )
}

export default NavBar;