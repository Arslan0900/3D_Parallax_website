import React, { useEffect, } from "react";
import styles from "../Styling/Main.module.scss";
// import gsap from "gsap";

const Main = () => {
  // useEffect(() => {
  //   const main = document.querySelector(`.${styles.main}`);
  //   if (window.innerWidth >= 725){
  //     main.style.maxHeight = `${window.innerWidth * 0.6}px`;
  //   }else{
  //     main.style.maxHeight = `${window.innerWidth * 1.6}px`;

  //   }
  // }, [])
  
  useEffect(() => {
    let xValues = 0,
      yValues = 0,
      rotateDegree = 0;
    const parallaxEls = document.querySelectorAll(`.${styles.parallax}`);
   
    function update(curserPosition) {
      parallaxEls.forEach((el) => {
        // console.log(el);
        const speedx = el.dataset.speedx;
        const speedy = el.dataset.speedy;
        const speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;
        const isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;
        const zValues =
          (curserPosition - parseFloat(getComputedStyle(el).left)) *
          isInLeft *
          0.2;
        // console.log(zValues)

        el.style.transform = `translateX(calc(-50% + ${
          -xValues * speedx
        }px)) translateY(calc(-50% + ${
          yValues * speedy
        }px)) perspective(2300px) translateZ(${zValues * speedz}px) rotateY(${
          rotateDegree * rotateSpeed
        }deg)`;
      });
    }
    update(0);
    const handleMouseMove = (e) => {
      xValues = e.clientX - window.innerWidth / 2;
      yValues = e.clientY - window.innerHeight / 2;
      rotateDegree = (xValues / (window.innerWidth / 2)) * 40;
      update(e.clientX);
      //   console.log(rotateDegree);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // return () => {
    //   window.removeEventListener("mousemove", handleMouseMove);
    // };
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.vignette}></div>
      <img
        src="\img\background.png"
        alt=""
        data-speedx="0.38"
        data-speedy="0.38"
        data-speedz="0"
        data-rotation="0"
        data-distance="-200"
        className={`${styles.parallax} ${styles.bg_img}`}
      />
      <img
        src="\img\fog_7.png"
        alt=""
        data-speedx="0.27"
        data-speedy="0.32"
        data-speedz="0"
        data-rotation="0"
        data-distance="850"
        className={`${styles.parallax} ${styles.fog_7}`}
      />
      <img
        src="\img\mountain_10.png"
        alt=""
        data-speedx="0.195"
        data-speedy="0.305"
        data-speedz="0"
        data-rotation="0"
        data-distance="1100"
        className={`${styles.parallax} ${styles.mountain_10}`}
      />
      <img
        src="\img\fog_6.png"
        alt=""
        data-speedx="0.25"
        data-speedy="0.28"
        data-speedz="0"
        data-rotation="0"
        data-distance="1400"
        className={`${styles.parallax} ${styles.fog_6}`}
      />
      <img
        src="\img\mountain_9.png"
        alt=""
        data-speedx="0.125"
        data-speedy="0.155"
        data-speedz="0.15"
        data-rotation="0.2"
        data-distance="1700"
        className={`${styles.parallax} ${styles.mountain_9}`}
      />
      <img
        src="\img\mountain_8.png"
        alt=""
        data-speedx="0.1"
        data-speedy="0.11"
        data-speedz="0"
        data-rotation="0.2"
        data-distance="1800"
        className={`${styles.parallax} ${styles.mountain_8}`}
      />
      <img
        src="\img\fog_5.png"
        alt=""
        data-speedx="0.16"
        data-speedy="0.105"
        data-speedz="0"
        data-rotation="0"
        data-distance="1900"
        className={`${styles.parallax} ${styles.fog_5}`}
      />
      <img
        src="\img\mountain_7.png"
        alt=""
        data-speedx="0.1"
        data-speedy="0.1"
        data-speedz="0"
        data-rotation="0.09"
        data-distance="2000"
        className={`${styles.parallax} ${styles.mountain_7}`}
      />
      <div
        className={`${styles.text} ${styles.parallax}`}
        data-speedx="0.07"
        data-speedy="0.07"
        data-speedz="0"
        data-rotation="0.11"
      >
        <h2>China</h2>
        <h1>Zhangjiajie</h1>
      </div>
      <img
        src="\img\mountain_6.png"
        alt=""
        data-speedx="0.065"
        data-speedy="0.05"
        data-speedz="0.05"
        data-rotation="0.12"
        data-distance="2300"
        className={`${styles.parallax} ${styles.mountain_6}`}
      />
      <img
        src="\img\fog_4.png"
        alt=""
        data-speedx="0.135"
        data-speedy="0.32"
        data-speedz="0"
        data-rotation="0"
        data-distance="2400"
        className={`${styles.parallax} ${styles.fog_4}`}
      />
      <img
        src="\img\mountain_5.png"
        alt=""
        data-speedx="0.08"
        data-speedy="0.024"
        data-speedz="0.13"
        data-rotation="0.1"
        data-distance="2550"
        className={`${styles.parallax} ${styles.mountain_5}`}
      />
      <img
        src="\img\fog_3.png"
        alt=""
        data-speedx="0.11"
        data-speedy="0.018"
        data-speedz="0"
        data-rotation="0"
        data-distance="2800"
        className={`${styles.parallax} ${styles.fog_3}`}
      />
      <img
        src="\img\mountain_4.png"
        alt=""
        data-speedx="0.059"
        data-speedy="0.024"
        data-speedz="0.35"
        data-rotation="0.14"
        data-distance="3200"
        className={`${styles.parallax} ${styles.mountain_4}`}
      />
      <img
        src="\img\mountain_3.png"
        alt=""
        data-speedx="0.04"
        data-speedy="0.018"
        data-speedz="0.32"
        data-rotation="0.05"
        data-distance="3400"
        className={`${styles.parallax} ${styles.mountain_3}`}
      />
      <img
        src="\img\fog_2.png"
        alt=""
        data-speedx="0.15"
        data-speedy="0.0115"
        data-speedz="0"
        data-rotation="0"
        data-distance="3600"
        className={`${styles.parallax} ${styles.fog_2}`}
      />
      <img
        src="\img\mountain_2.png"
        alt=""
        data-speedx="0.0235"
        data-speedy="0.013"
        data-speedz="0.42"
        data-rotation="0.15"
        data-distance="3800"
        className={`${styles.parallax} ${styles.mountain_2}`}
      />
      <img
        src="\img\mountain_1.png"
        alt=""
        data-speedx="0.027"
        data-speedy="0.018"
        data-speedz="0.53"
        data-rotation="0.2"
        data-distance="4000"
        className={`${styles.parallax} ${styles.mountain_1}`}
      />
      <img src="\img\sun_rays.png" alt="" className={` ${styles.sun_rays}`} />
      <img
        src="\img\black_shadow.png"
        alt=""
        className={` ${styles.black_shadow}`}
      />
      <img
        src="\img\fog_1.png"
        alt=""
        data-speedx="0.12"
        data-speedy="0.01"
        data-speedz="0"
        data-rotation="0"
        data-distance="4200"
        className={`${styles.parallax} ${styles.fog_1}`}
      />
    </div>
  );
};

export default Main;
