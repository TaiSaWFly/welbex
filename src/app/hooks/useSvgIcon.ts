import { ReactComponent as logo } from "../../assets/svg-icons/logo_welbex.svg";
import { ReactComponent as viber } from "../../assets/svg-icons/viber.svg";
import { ReactComponent as telegram } from "../../assets/svg-icons/telegram.svg";
import { ReactComponent as whatsapp } from "../../assets/svg-icons/whatsapp.svg";

const useSvgIcon = () => {
    return {
        LogoIcon: logo,
        ViberIcon: viber,
        TelegramIcon: telegram,
        WhatsappIcon: whatsapp
    };
};

export default useSvgIcon;
