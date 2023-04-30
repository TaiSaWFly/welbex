import React from "react";
import style from "./header.module.scss";
import ComponentContainer from "../../../common/ComponentContainer";
import Logo from "../Logo/Logo";
import NavigateMenu from "../NavigateMenu/NavigateMenu";
import HeaderInfo from "../HeaderInfo/HeaderInfo";

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <ComponentContainer>
                <div className={style.header_wrapper}>
                    <div className={style.header_wrapper__group}>
                        <Logo />
                        <NavigateMenu />
                    </div>

                    <HeaderInfo />
                </div>
            </ComponentContainer>
        </header>
    );
};

export default Header;
