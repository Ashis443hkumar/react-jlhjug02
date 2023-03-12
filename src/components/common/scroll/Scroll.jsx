import React, { useState, useEffect } from 'react';
import './scroll.css';

export default function Scroll() {

  const [isVisiable, setIsvisiavle] = useState(false);

  const goToBtn = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const listenScroll = () => {

    let hightToHidden = 250;

    const windScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windScroll > hightToHidden) {
      setIsvisiavle(true);
    } else {
      setIsvisiavle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return ()=> window.removeEventListener('scroll', listenScroll)
  },[]);

  return (
    <>
      {isVisiable && (
        <div className="go-To-Btn" onClick={goToBtn}>
          <i class="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </>
  );
}