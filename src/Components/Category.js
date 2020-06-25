import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import checkCookie from './cookies/checkCookie';
import firebase from '../Config/Config';
import Categorydisplay from './Categorydisplay';
//import Categoryblog from './Categoryblog';

class Category extends Component {
    constructor(props){
        super(props);
        this.state ={
           category : [],
           login: false,
           error: ""
           
        }
    }
    
    componentWillMount(){     
        firebase
          .firestore()
          .collection('users')
          .doc("Zarifprogrammer@gmail.com")
          .get()
          .then((doc) => {        
            if (doc.exists){
              this.setState({
                  category: doc.data()
               })
            }
            else{
               window.location="/categories";
            }
          })
          .catch((err) => console.error(err)); 

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



