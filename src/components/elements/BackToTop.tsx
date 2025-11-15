import { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 100 && !hasScrolled) {
      setHasScrolled(true);
    } else if (window.scrollY <= 100 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasScrolled]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    hasScrolled && (
      <a className="scroll-up show" onClick={scrollToTop} aria-label="Back to top">
        <i className="fa fa-arrow-up" />
      </a>
    )
  );
};

export default BackToTop;