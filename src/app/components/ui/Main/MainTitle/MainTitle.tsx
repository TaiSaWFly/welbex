import React from "react";
import style from "./mainTitle.module.scss";

const MainTitle: React.FC = () => {
    return (
        <div className={style.main_title}>
            <h1 className={style.main_title__content}>
                <span className={style.main_title__content_subtitle}>
                    Зарабатывайте <br />
                    больше
                </span>
                <span className={style.main_title__content_title}>
                    c WELBEX
                </span>
            </h1>

            <div className={style.main_title__info}>
                Развиваем и контролируем <br />
                продажи за вас
            </div>
        </div>
    );
};

export default MainTitle;
