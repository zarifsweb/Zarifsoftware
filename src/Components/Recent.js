import React, {Component} from 'react';
import firebase from '../Config/Config';

class Recent extends Component {
    constructor(props){
        super(props);
        this.subscribe = this.subscribe.bind(this);
        this.ref = firebase.firestore();
        this.state = {
           categories: []
        }

    }
    componentWillMount(){ 
       this.ref.collection('categories').get()
       .then(this.subscribe)
       .catch((error)=>{
          console.log(error);
       })
       
    }
    subscribe(snap){
       const categories = [];
       snap.forEach((doc)=>{
          const {name, description, url} = doc.data()
          categories.push({
              name,
              description,
              url
           })
        });
        this.setState({categories : categories})

    }
    render(){
        return (
<section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">     
       <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="{category.url}" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">category.name</h2>
          <p class="leading-relaxed text-base">category.description</p>
        </div>
      </div>
     </div>
  </div>
</section>
        )
    } 
  }

export default Recent;


