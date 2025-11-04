import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SecondVideo = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.set('.lucia', { marginTop: '-60vh', opacity: 0 });     // lucia section ( marginTop- para mag shift whole section up and make it invisble initially by giving it opa 0)

    const tl = gsap.timeline({      // timeline
      scrollTrigger: {
        trigger: '.lucia',      // ma trigger si lucia
        start: 'top top',       // start ung top
        end: 'bottom top',      // end nya yung after ung top top ng view port
        scrub: 2,               // lag effect ng 2secs
        pin: true               // fixed thru scrolling
      }
    })

    tl.to('.lucia', { opacity: 1, duration: 1, ease: 'power1.inOut' }) // fade in ng video 

    // animate playback ng lucia
    videoRef.current.onloadedmetadata = () => {         // para malaman if nag load na data
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<')   // play full video and "<"- make it play along with prev animation 
    }
  })

  return (
    <section className="lucia">
      <div className="h-dvh">       // full height
        <video 
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"         // video
          className="size-full object-cover second-vd"      //
          style={{ 
            objectPosition: '15% 0%'    // para lang mag center ung video kasi if wala to bordwalk lang makikita mo 
          }}
        />
      </div>
    </section>
  )
}

export default SecondVideo