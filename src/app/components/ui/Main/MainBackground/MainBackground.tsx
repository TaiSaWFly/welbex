import React from "react";
import style from "./mainBackground.module.scss";

const MainBackground: React.FC = () => {
    return (
        <>
            <div className={style.red_ball}></div>
            <div className={style.purple_ball}></div>
            <div className={style.reds_ball}></div>
            <div className={style.red_light}></div>
            <div className={style.purple_light}></div>
            <div className={style.white_light}></div>
        </>
    );
};

export default MainBackground;
