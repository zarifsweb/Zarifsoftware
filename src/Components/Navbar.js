import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  
    render(){
        return (
            <header class="text-gray-700 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
    <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">ZarifSoftware</span>
    </Link>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link class="mr-5 hover:text-gray-900" to="/">Home</Link>
      <Link class="mr-5 hover:text-gray-900" to="/">About</Link>
      <Link class="mr-5 hover:text-gray-900" to="/">Blog</Link>
      <Link class="mr-5 hover:text-gray-900" to="/">Categories</Link>
      <Link class="mr-5 hover:text-gray-900" to="/">Contact Us</Link>
    </nav>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
             Login
        </button>
        <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
             Sign up
        </button>
    </nav>
  </div>
</header>
        )
    } 
  }

export default Navbar;


