import React from "react";
import Image from "next/image";
import style from "./WorkingProccess.module.scss";
import Work1 from "../../assets/png/work-1.png";
import Work2 from "../../assets/png/work-2.png";
import Work3 from "../../assets/png/work-3.png";
const WorkingProccess = () => {
  return (
    <div className={style.wrapper}>
      <div className="container">
        <h3 className={style.title}>Our WORKING PROCCESS</h3>
        <div className={style.header}>
          <h2>
            Will Change The{" "}
            <span className="greenContent">Way You Approach</span> Working
          </h2>
          <span className={style.typography}>
            <p>
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua lonm andhn.
            </p>
          </span>
        </div>
        <div className={style.items}>
          <div className={style.item}>
            <div className={style.imgBlock}>
              <Image src={Work1} />
              <div className={style.number}>1</div>
            </div>
            <div className={style.contentBlock}>
              <h3>Inspect & Analyze</h3>
              <p>
                must to you how all this mistaken idea of denou pleasure and
                praising.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.imgBlock}>
              <Image src={Work1} />
              <div className={style.number}>2</div>
            </div>
            <div className={style.contentBlock}>
              <h3>Inspect & Analyze</h3>
              <p>
                must to you how all this mistaken idea of denou pleasure and
                praising.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.imgBlock}>
              <Image src={Work1} />
              <div className={style.number}>3</div>
            </div>
            <div className={style.contentBlock}>
              <h3>Inspect & Analyze</h3>
              <p>
                must to you how all this mistaken idea of denou pleasure and
                praising.
              </p>
            </div>
          </div>
        </div>
        <div className={style.btn}>
          <a>View all services</a>
        </div>
      </div>
    </div>
  );
};

export default WorkingProccess;
