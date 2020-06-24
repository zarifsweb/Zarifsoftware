import React, {Component} from 'react';
//import Recent from './Recent';
import Logo from './my_image.jpg';
import checkCookie from './cookies/checkCookie';
//import getCookie from './cookies/getCookie';

class Home extends Component {
  
    render(){
        return (
<React.Fragment>
<section class="text-gray-700 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={Logo}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to 
        <br class="hidden lg:inline-block"/> ZarifSoftware
      </h1>
      <p class="mb-8 leading-relaxed">Here you can learn coding from blog. You can learn any programming language do you want. Plus you can learn to make cool projects with source code. I am Zarif. I am a web and android developer. Javascript is my favourite programming language.</p>
    </div>
  
{
checkCookie("user") ?
 (<div><br/>
      <div class="flex justify-center">
        <a href="/categories" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Go to blog</a>
      </div>
 </div>)
  :(
      <div class="flex justify-center">
        <a href="/signup" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Signup</a>
        <a href="/login" class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Login</a>
      </div>
  )

}
</div>
</section>
</React.Fragment>
        )
    } 
  }

export default Home;


