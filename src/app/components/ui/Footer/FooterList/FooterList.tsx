import React from "react";
import style from "./footerList.module.scss";
import { ICompanyInfo } from "../../../../ts/models/ICompanyInfo";
import { IMenu } from "../../../../ts/models/IMenu";

interface FooterListProps {
    title: string;
    data?: ICompanyInfo[] | IMenu[];
    children?: React.ReactNode;
}

const FooterList: React.FC<FooterListProps> = ({ title, data, children }) => {
    return (
        <>
            <div className={style.footer_list__title}>{title}</div>
            {data ? (
                <ul className={style.footer_list}>
                    {data.map((d) => (
                        <li key={d._id}>{d.name}</li>
                    ))}
                </ul>
            ) : (
                children
            )}
        </>
    );
};

export default FooterList;
