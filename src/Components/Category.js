import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import checkCookie from './cookies/checkCookie';
import firebase from '../Config/Config';
import Categorydisplay from './Categorydisplay';
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
        this.db.collection("cat").doc(this.props.match.params.id).get().then(
          (doc)=>{
             if(doc.exists){
                this.setState({category: doc.data()})
             }else{
                alert("This category doesn't exist!");
                window.location="/categories";
             }
       });

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
             (<div>
               <Categorydisplay catname={this.state.category.name} catdescription={this.state.category.description} caturl={this.state.category.url}/>
               
             </div>)
             : (<Redirect to="/login"/>)
             }
           </React.Fragment>
        )
    } 
  }

export default Category;



