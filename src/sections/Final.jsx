import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Final = () => {
  const videoRef = useRef(null); // video

  useGSAP(() => {
    gsap.set('.final-content', { opacity: 0 });         // hidden at start

    gsap.timeline({
      scrollTrigger: {                  
        trigger: '.final',
        start: 'top top',
        end: '90% top',                 // end before ma reach pinaka bottom mag end na sha
        scrub: true,
        pin: true,                      // pin entire section during scroll para ung video fixed lang as we scroll
      }
    })

    const tl = gsap.timeline({          // timeline
      scrollTrigger: {
        trigger: '.final',              // final vid
        start: 'top 80%',               // start it when the top of the section reaches about 80% of the viewport mag start fade when the section is mostly visible 
        end: '90% top',                 //  and well end it before the bottom scroll reaches 
        scrub: true,                    // true para sync animation sa scroll 
      }
    })

    tl.to('.final-content', { opacity: 1, duration: 1, scale: 1, ease: 'power1.inOut' });   // para reveal smoothly 

    videoRef.current.onloadedmetadata = () => {         // we want to scroll play the video once its loaded 
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
    }
  });

  return (
    <section className="final">
      <div className="final-content size-full">           {/*  since full video lang to */}
        <video 
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output3.mp4"
          className="size-full object-cover"
        />
      </div>
    </section>
  )
}

export default Final