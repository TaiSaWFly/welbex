import React from "react";
import style from "./footer.module.scss";
import ComponentContainer from "../../../common/ComponentContainer";
import { companyInfo } from "../../../../mockData/companyInfo";
import { menus } from "../../../../mockData/menus";
import { address, telephone } from "../../../../mockData/variblesData";
import FooterList from "../FooterList/FooterList";
import useSvgIcon from "../../../../hooks/useSvgIcon";

const Footer: React.FC = () => {
    const { ViberIcon, TelegramIcon, WhatsappIcon } = useSvgIcon();

    return (
        <footer className={style.footer}>
            <ComponentContainer>
                <div className={style.footer_wrapper}>
                    <div className={style.footer_wrapper__company_info}>
                        <FooterList title="О компании" data={companyInfo} />
                    </div>

                    <div className={style.footer_wrapper__menus}>
                        <FooterList title="Меню" data={menus} />
                    </div>

                    <div className={style.footer_wrapper__contacts}>
                        <FooterList title="Контакты">
                            <a href={`tel:${telephone}`}>{telephone}</a>
                            <div
                                className={
                                    style.footer_wrapper__contacts_social
                                }
                            >
                                <TelegramIcon />
                                <ViberIcon />
                                <WhatsappIcon />
                            </div>
                            <address>{address}</address>
                        </FooterList>
                    </div>
                </div>

                <div className={style.footer_author}>
                    <span>©WELBEX 2022. Все права защищены.</span>
                    <a>Политика конфиденциальности</a>
                </div>
            </ComponentContainer>
        </footer>
    );
};

export default Footer;
