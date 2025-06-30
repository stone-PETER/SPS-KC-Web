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
      // hero.style.top = scrollY + "px";
      // hero.style.backgroundPositionY = -scrollY / 2 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="main-hero">
      <div className="hero" ref={heroRef}>
        <video autoPlay muted loop className="background-video">
          <source src="/vid/2.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1>
            IEEE<span>SPS Kerala Chapter</span>
          </h1>
          <p>Connecting Signal Minds Across the Globe</p>
          <button className="join-btn">
            <a
              href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMSP001&refProd=MEMSP001"
              target="_blank"
            >
              Join Now
            </a>
          </button>
        </div>
      </div>
      <svg
        width="1833"
        viewBox="0 0 1833 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="divider"
      >
        <path
          opacity="0.5"
          d="M1603.44 0.0325995C1509.9 0.0325995 1467.91 65.0326 1374.38 65.0326C1280.84 65.0326 1237.77 1.75009 1145.31 0.0325995C1052.86 -1.68489 1008.72 65.0326 916.25 65.0326C823.778 65.0326 779.644 -1.68489 687.188 0.0325995C594.731 1.75009 551.663 65.0326 458.125 65.0326C364.587 65.0326 322.601 0.0325995 229.062 0.0325995C135.524 0.0325995 102.5 65.0326 0 65.0326V104.533H1832.5V65.0326C1725.5 65.0326 1696.98 0.0325995 1603.44 0.0325995Z"
          fill="white"
          className="wave1"
        />
        <path
          d="M1611.62 75.3335C1520.89 71.7319 1463.42 3.71567 1374.38 15.3335C1285.34 26.9513 1242.99 82.6883 1153.5 75.3335C1064.01 67.9787 1007.5 15.3335 916.25 15.3335C825 15.3335 784.414 63.7157 695.374 75.3335C606.334 86.9513 547.618 22.6883 458.125 15.3335C368.632 7.9787 329.722 75.3335 237.249 75.3335C144.777 75.3335 76.5 15.3335 0 15.3335V104.834H1832.5V15.3335C1777 15.3335 1702.36 78.9351 1611.62 75.3335Z"
          fill="white"
          className="wave2"
        />
      </svg>
    </section>
  );
}
