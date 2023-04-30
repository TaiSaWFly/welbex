import React from "react";
import style from "./navigateMenu.module.scss";
import { menus } from "../../../../mockData/menus";

const NavigateMenu: React.FC = () => {
    const importantMenus = menus.filter((m) => m.important);

    return (
        <nav className={style.nav}>
            <ul className={style.nav_list}>
                {importantMenus.map((menu) => (
                    <li key={menu._id} className={style.nav_list__item}>
                        {menu.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigateMenu;
