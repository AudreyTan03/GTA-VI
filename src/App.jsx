import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';

gsap.registerPlugin(ScrollTrigger); // para di mo na need register isa isa pede mo gawin to

function App() {
  return (
<main>

    <NavBar/>
    <Hero/>
</main>
  )
}

export default App