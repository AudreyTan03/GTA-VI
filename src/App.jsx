import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';
import PostCard from './sections/PostCard';

gsap.registerPlugin(ScrollTrigger); // para di mo na need register isa isa pede mo gawin to

function App() {
  return (
<main>

    <NavBar/>
    <Hero/>

    <FirstVideo/>
    <Jason/>

    <SecondVideo/>
    <Lucia/>

    <PostCard/>
</main>
  )
}

export default App