import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./styles/BackToTopButton.scss";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Detect if the device is a desktop
    const userAgent = navigator.userAgent.toLowerCase();
    const isDesktopDevice = /windows|macintosh|linux/.test(userAgent);
    setIsDesktop(isDesktopDevice);

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`btn btn--filled back-to-top-button ${
            isDesktop ? "desktop pulse" : ""
          }`}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
