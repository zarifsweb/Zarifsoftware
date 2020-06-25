import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import checkCookie from './cookies/checkCookie';
import firebase from '../Config/Config';
import Categorydisplay from './Categorydisplay';
import Categoryblog from './Categoryblog';

class Category extends Component {
    constructor(props){
        super(props);
        this.state ={
           name : "",
           descriprion : "",
           url : "",
           login: false,
           error: ""
           
        }
    }
    
    componentWillMount(){     
        firebase
          .firestore()
          .collection('cat')
          .doc(this.props.match.params.id)
          .get()
          .then((doc) => {
            if (doc.exists()){
               this.setState({
                  name: doc.data().name,
                  description: doc.data().description,
                  url: doc.data().url
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
               <Categorydisplay name={this.state.name} description={this.state.description} url={this.state.url}/>
               <Categoryblog name={this.state.name}/>
             </div>)
             : (<Redirect to="/login"/>)
             }
           </React.Fragment>
        )
    } 
  }

export default Category;



