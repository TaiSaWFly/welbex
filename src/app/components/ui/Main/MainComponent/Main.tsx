import React from "react";
import style from "./main.module.scss";
import ComponentContainer from "../../../common/ComponentContainer";
import MainTitle from "../MainTitle/MainTitle";
import Features from "../Features/Features";
import MainBackground from "../MainBackground/MainBackground";

const Main: React.FC = () => {
    return (
        <section className={style.main}>
            <ComponentContainer>
                <div className={style.main_wrapper}>
                    <MainTitle />
                    <Features />

                    <MainBackground />
                </div>
            </ComponentContainer>
        </section>
    );
};

export default Main;
