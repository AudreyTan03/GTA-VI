import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

const PostCard = () => {
  const videoRef = useRef(null);        // video call

  useGSAP(() => {
    const tl = gsap.timeline({          // timeline
      scrollTrigger: {
        trigger: '.post-card',          // postcard 
        start: 'top center',            // start sha when the top of the postcard class enters the middle of the viewport
        end: 'bottom center',           // end ung bottom of the class reaches the center of the screen 
        scrub: true,                    // animete on scroll (when animating videos we have to first fetch it )
      }
    })

    videoRef.current.onloadedmetadata = () => {             // 
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
    }
  })
  

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />  {/*  gradient bg */}

      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">  {/* hover effect */}
        <img src="/images/overlay.webp" />   {/* overlay image ung frame lang to ng leonida keys */}

        <video                       // para lumitaw ung ano video na may buildings
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />

        <button className="group-hover:bg-yellow transation duration-700">       {/*  call to action lang to */}
          Explore Leonida Keys
        </button>
      </div>
    </section>
  )
}

export default PostCard