import React from "react";
import Header from "./components/ui/Header/HeaderComponent/Header";
import PageLayout from "./components/layouts/PageLayout";
import Main from "./components/ui/Main/MainComponent/Main";
import Footer from "./components/ui/Footer/FooterComponent/Footer";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <PageLayout>
                <Main />
            </PageLayout>
            <Footer />
        </>
    );
};

export default App;
