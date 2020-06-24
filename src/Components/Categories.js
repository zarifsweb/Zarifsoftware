import React, {Component} from 'react';
import checkCookie from './cookies/checkCookie';
import firebase from '../Config/Config';
import {Redirect} from 'react-router-dom';

class Categories extends Component {
    constructor(props){
        super(props);
        this.db = firebase.firestore();
        this.state ={
           categories : [],
           login: false,
           error: ""
           
        }
    }
    
    componentWillMount(){
       this.db.collection("categories").get().then((querySnapshot) => {
          const categories = [];
          querySnapshot.forEach((doc) => {
             console.log(`${doc.id} => ${doc.data()}`);
             categories.push({
                id: doc.id,
                name: doc.data().name,
                description : doc.data().description,
                url: doc.data().url,
             })
          });
          this.setState({categories});
       }).catch(err => this.setState({ error: err}))
       if(checkCookie("user")){
          this.setState({login: true})
       }else{
          this.setState({login: false})
       }
    }

    render(){
        return (
<div>

{ this.state.login ? (
<section class="text-gray-700 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8">
    {this.state.error}
    { this.state.categories.map ( category => 
      <React.Fragment>
      
      <div class="py-8 flex flex-wrap md:flex-no-wrap p-8" style={{backgroundColor: "white"}}>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{category.name}h</h2>
          <p class="leading-relaxed">{category.description}</p>
          <a href="/" class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <hr/>
      </React.Fragment>
     )}
    </div>
  </div>
</section>   
) : (
<Redirect to="/login"/>
)
}
</div>      
        )
    } 
  }

export default Categories;


