import React from "react";
import style from "./headerInfo.module.scss";
import { telephone } from "../../../../mockData/variblesData";
import useSvgIcon from "../../../../hooks/useSvgIcon";

const HeaderInfo: React.FC = () => {
    const { ViberIcon, WhatsappIcon, TelegramIcon } = useSvgIcon();

    return (
        <div className={style.header_info}>
            <div className={style.header_info__telephone}>
                <a href={`tel:${telephone}`}>{telephone}</a>
            </div>

            <div className={style.header_info__social}>
                <TelegramIcon />
                <ViberIcon />
                <WhatsappIcon />
            </div>
        </div>
    );
};

export default HeaderInfo;
