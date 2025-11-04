
import gsap from 'gsap';
import  {useGSAP} from '@gsap/react';
import { useMaskSettings } from '../../constants';
import ComingSoon from './ComingSoon'

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 }); // para ma hide

    gsap.set('.entrance-message', { marginTop: '0vh' }); // reset value

    const tl = gsap.timeline({      //timeline
      scrollTrigger: {
        trigger: '.hero-section', // which element to watch for scrolling  
        start: 'top top', // when animation start pag na reach na top ng viewport
        scrub: 2.5, // lag effect 
        end: '+=200%', // end of animation (100% - landing palang pag nag scroll ka other 100%)
        pin: true, // freeze the animation whre the content stays fixed while things animate
      }
    })

    tl
      .to('.fade-out', { opacity: 0, ease: 'power1.inOut' }) // fade element pag na reach 200% ng viewport nag fade na sha
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' }) // nag zoom out or scale out after mag fade
      .to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<') // < means start maskwrapper sabay ng mga fade out (pang overlap) pag wala yung < need pa matapos lahat ( nung na apply < - andyan pa bg and lumalabas na mask-wrapper)
      .to('.mask-wrapper', { opacity: 0 }) // once tapos na transition mag fade out lahat ng mask container 
      .to('.overlay-logo', { opacity: 1, onComplete: () => {        // oncomplete kasi pag mobile collide yung logo
        gsap.to('.overlay-logo', { opacity: 0 });                   // para lang ma hide sa mobile kaya opacity 0
      } }, '<')
      .to('.entrance-message', { duration: 1, ease: 'power1.inOut', maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)' }, '<') // ito ung MAY ung radial gradien - circular mask (parang spotlight na effect)
  });

  return (
    <section className='hero-section'>
        <div className='size-full mask-wrapper'>
            <img src='/images/hero-bg.webp' 
            alt ='background
            'className='scale-out'/>

            <img src='/images/hero-text.webp' 
            alt='hero-logo' 
            className='title-logo fade-out'/>

            <img src='/images/watch-trailer.png' alt='trailer' className='trailer-logo fade-out' />

            <div className='play-img fade-out'>
                <img src='/images/play.png' alt='play' className='w-7 ml-1'  />
            </div>
        </div>

        <div>
        <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo" />
      </div>

      <div className='fake-logo-wrapper'>
        <img src="/images/big-hero-text.svg" className="overlay-logo" />
      </div>


        <ComingSoon/>
    </section>
  )
}

export default Hero