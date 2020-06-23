import React, {Component} from 'react';
import checkCookie from './cookies/checkCookie';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';

class Navbar extends Component {

    render(){
        return (
            <div>
              {checkCookie("user") ?
                   (<Navbar2/>)
              :
                   (<Navbar1/>)
        
              }
            </div>
        )
    } 
  }

export default Navbar;
