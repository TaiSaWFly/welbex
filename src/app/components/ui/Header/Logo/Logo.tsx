import React from "react";
import style from "./logo.module.scss";
import useSvgIcon from "../../../../hooks/useSvgIcon";

const Logo: React.FC = () => {
    const { LogoIcon } = useSvgIcon();

    return (
        <div className={style.logo}>
            <LogoIcon />

            <div className={style.logo_info}>
                крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
        </div>
    );
};

export default Logo;
