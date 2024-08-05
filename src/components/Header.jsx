//import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    return(
        <div className="header">
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <p>Home</p>
                <p>About</p>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
    )
}

export default Header;