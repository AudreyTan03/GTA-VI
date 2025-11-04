import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Jason = () => {
  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' });         //initial layout  una jason para magkaroon ng overlap reveal with prev sec

    gsap.timeline({             // timeline pang fade out
      scrollTrigger: {
        trigger: '.jason',      // trigger si jason
        start: 'top 90%',       // start when the top reaches the 90% of viewport
        end: '10% center',      // end near the middle
        scrub: 2,               // make the animation follow the scroll position then delayed as 2 secs
      }
    }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' }); // pang fade out sa first video para lumitaw na si jason

    gsap.to('.jason .img-box', {            // para lumitaw si jason
      scrollTrigger: {
        trigger: '.jason',          //
        start: 'top center',        //  start sha pag wen the top Jason component  reaches the center 
        end: '80% center',          // end
        scrub: 2                        // for consistency
      }, y: -300, duration: 1, ease: 'power1.inOut'         
    }, '<')                        // mag start sha alongside the prev animation mangyare sha along the fade of the video not after
  }) 

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>
        <h2>Jason wants an easy life, but things just keep getting harder.</h2>
        <p>Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.</p>

        <div className="jason-2">                   {/* main image */}
          <img src="/images/jason-2.webp" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">     // 
        <div className="jason-1">
          <img src="/images/jason-1.webp" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" />
        </div>
      </div>
    </section>
  )
}

export default Jason