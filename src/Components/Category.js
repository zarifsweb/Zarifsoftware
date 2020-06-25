import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import checkCookie from './cookies/checkCookie';
import firebase from '../Config/Config';
//import Categorydisplay from './Categorydisplay';
//import Categoryblog from './Categoryblog';

class Category extends Component {
    constructor(props){
        super(props);
        this.db = firebase.firestore();
        this.state ={
           category : [],
           login: false,
           error: ""
           
        }
    }
    
    componentWillMount(){     
       this.db.collection('cat').doc(this.props.id).get().then(
          (doc)=>{
             if(doc.exists){
                this.setState({
                    category: doc.data()
                })
             }
          }

       if(checkCookie("user")){
          this.setState({login: true})
       }else{
          this.setState({login: false})
       }
    }
    
    render(){
        return (
           <React.Fragment>
             { this.state.login ? 
             (
               <h1>{this.state.category.name}</h1>
               )
             : (<Redirect to="/login"/>)
             }
           </React.Fragment>
        )
    } 
  }

export default Category;



