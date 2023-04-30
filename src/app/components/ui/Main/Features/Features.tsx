import React from "react";
import style from "./features.module.scss";
import { features } from "../../../../mockData/features";
import Button from "../../../common/Button";

const Features: React.FC = () => {
    return (
        <div className={style.features}>
            <div className={style.features_title}>
                Вместе с{" "}
                <span>
                    бесплатной <br /> консультацией
                </span>{" "}
                мы дарим:
            </div>

            <div className={style.features_block_w}>
                <ul className={style.features_block}>
                    {features.map((feature) => (
                        <li
                            key={feature._id}
                            className={style.features_block__item}
                        >
                            <div className={style.features_block__item_title}>
                                {feature.name}
                            </div>
                            <div
                                className={
                                    style.features_block__item_description
                                }
                            >
                                {feature.description}
                            </div>
                            <div
                                className={style.features_block__item_subtitle}
                            >
                                <span
                                    className={
                                        style.features_block__item_subtitle_decorate
                                    }
                                ></span>
                                <span>{feature.subName}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Button>Получить консультацию</Button>
        </div>
    );
};

export default Features;
