import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react"

const FirstVideo = () => {
  const videoRef = useRef(null); // pang allow lang para makapag kabit ng video 

  useGSAP(() => {                       // it will only run at the start []
    gsap.set('.first-vd-wrapper', { marginTop: '-150vh', opacity: 0 });  // need ka start mag open video kaya .set

    const tl = gsap.timeline({          // scroll trigger timeline
      scrollTrigger: {
        trigger: '.first-vd-wrapper',       // first define how we'll trigger the scroll  which is trigger sha if first vd jump to viewport
        start: 'top top',                   // we'll start it when the top of the wrapper reaches the top of the viewport
        end: '+=200% top',                  // end sya 200% scroll 
        scrub: true,                        // pang allow para mag sync the animation with the scroll postion
        pin: true,                          // pang keep the section fixed while scrolling
      }
    })

        // sequence pang animate 
    tl.to('.hero-section', { delay: 0.5, opacity: 0, ease: 'power1.inOut' });       // fade out the hero section para itong new section pumasok
    tl.to('.first-vd-wrapper', { opacity: 1, duration: 2, ease: 'power1.inOut' });  // fade in the first video wrapper

    // para lumitaw na ung video after ng timeline 
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<'); 
    }
  }, []);

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">           //ensure full height 
        <video 
          ref={videoRef}
          muted                     // dont need any sounds
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="first-vd"
        />
      </div>
    </section>
  )
}

export default FirstVideo