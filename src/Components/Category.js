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
          .collection('cat')
          .doc(this.props.match.params.id)
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
               <Categorydisplay name={this.state.category.name} description={this.state.category.description} url={this.state.category.url}/>
               
             </div>)
             : (<Redirect to="/login"/>)
             }
           </React.Fragment>
        )
    } 
  }

export default Category;



