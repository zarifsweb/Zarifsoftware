import React, {Component} from 'react';
import firebase from '../Config/Config';

class Login extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state ={
           email: "",
           password: "",
           error: "",
        }
    }
 
    handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })

    }
    
    onSubmit(e){
       e.preventDefault();
       const {email, password} = this.state;
       firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.');
         } else {
            alert(errorMessage);
         }
         console.log(error);
         window.location="/signup";
       });
    }
    render(){
        return (
            <form class="w-full max-w-sm container">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Email
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Enter your Email" value={this.state.email} name="email" onChange={this.handleChange}/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
        Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-username" type="password" placeholder="Enter your Password" value={this.state.password} name="password" onChange={this.handleChange}/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-200 font-bold">
      <input class="mr-2 leading-tight" type="checkbox"/>
      <span class="text-sm">
        Remember me
      </span>
    </label>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={this.onSubmit}>
        Login
      </button>
    </div>
  </div>
</form>
        )
    } 
  }

export default Login;


