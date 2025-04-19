import { useEffect, useRef } from "react";
import "./hero.css";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      let scrollY = window.pageYOffset;
      let maxHeight = window.innerHeight;

      hero.style.opacity = 1 - scrollY / maxHeight;
      hero.style.top = scrollY + "px";
      hero.style.backgroundPositionY = -scrollY / 2 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="main-hero">
      <div className="hero" ref={heroRef}>
        <div className="content">
          <h1>IEEE<span>SPS Kerala Chapter</span></h1>
          <p>The Signal Processing Society, founded as IEEE’s first society in 1948</p>
        </div>
      </div>
     
    </section>
  );
}
