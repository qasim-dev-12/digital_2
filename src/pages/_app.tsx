import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/css/bootstrap.min.css";
import "../styles/css/aos.css";
import "../styles/css/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div id="preloader">
          <div className="preloader-loaded light">
            <div className="text-preloader-outer">
              <div className="text-preloading">
                {["D", "I", "G", "I", "T", "A", "A", "L"].map((letter, i) => (
                  <span key={i} className="text-split" data-text={letter}>
                    {letter}
                  </span>
                ))}
              </div>
            </div>
            <div className="preloader-slide slide-left"></div>
            <div className="preloader-slide slide-right"></div>
          </div>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
