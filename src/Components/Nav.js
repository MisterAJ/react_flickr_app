import React from 'react';

const NavBar = (props) => {
    let linkList = props.links.map((link, i) => <li key={i}>{link.name}</li>)
    
    return (
        <ul>
            {linkList}
        </ul>
    )
}

export default NavBar;