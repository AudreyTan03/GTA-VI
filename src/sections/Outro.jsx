import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Outro = () => {
  useGSAP(() => {
    gsap.set('.final-message', { marginTop: '-100vh', opacity: 0 })     // 

    const tl = gsap.timeline({              // outro reveal
      scrollTrigger: {
        trigger: '.final-message',          
        start: 'top 30%',           // we want to start if when the top of the final message reaches about 30% from the top viewport
        end: 'top 10%',             // and end it when its top reaches the 10% of the screen
        scrub: true,                // 
      }
    })

    tl.to('.final-content', { opacity: 0, duration: 1, ease: 'power1.inOut' })      // fade out the video about
    tl.to('.final-message', { opacity: 1, duration: 1, ease: 'power1.inOut' })      // fade in ung final message
  })

  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="logo" className="md:w-72 w-52" />   {/*  medium devices */}

        <div>
          <h3 className="gradient-title"> {/* keep the gradient  */}
            Coming <br /> May 26th <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  )
}

export default Outro