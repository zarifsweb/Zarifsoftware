import React, {Component} from 'react';
import Categorydisplay from './Categorydisplay';
import Categoryblog from './Categoryblog';

class Category extends Component {
  
    render(){
        return (
           <Categorydisplay/>
           <Categoryblog/>
        )
    } 
  }

export default Category;



