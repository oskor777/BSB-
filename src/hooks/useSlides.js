import { useState, useEffect, useCallback, useRef } from 'react';

export const useSlides = (totalSlides = 16) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [showNotes, setShowNotes] = useState(false);
  const [showVocab, setShowVocab] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

  const currentSlideRef = useRef(currentSlide);
  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  const goToSlide = useCallback((slideNum) => {
    if (slideNum < 1 || slideNum > totalSlides) return;
    setDirection(slideNum > currentSlideRef.current ? 1 : -1);
    setCurrentSlide(slideNum);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev < totalSlides) {
        setDirection(1);
        return prev + 1;
      }
      return prev;
    });
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev > 1) {
        setDirection(-1);
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const toggleNotes = useCallback(() => {
    setShowNotes(prev => !prev);
  }, []);

  const toggleVocab = useCallback(() => {
    setShowVocab(prev => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.warn(`Error attempting to exit fullscreen: ${err.message}`);
        });
        setIsFullscreen(false);
      }
    }
  }, []);

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept when user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ': // Spacebar
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          toggleNotes();
          break;
        case 'v':
        case 'V':
          e.preventDefault();
          toggleVocab();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, toggleFullscreen, toggleNotes, toggleVocab, totalSlides]);

  // Touch Swipe handlers
  const onTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    const diffY = touchStartYRef.current - e.changedTouches[0].clientY;

    // Minimum swipe threshold 50px and horizontal swipe stronger than vertical
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return {
    currentSlide,
    totalSlides,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
    showNotes,
    toggleNotes,
    showVocab,
    toggleVocab,
    isFullscreen,
    toggleFullscreen,
    touchHandlers: {
      onTouchStart,
      onTouchEnd
    }
  };
};
