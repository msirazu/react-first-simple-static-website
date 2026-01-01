import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <>
            <header className="">
                <Header />
            </header>
            <main className="min-h-screen bg-gray-50">
                <Outlet />
            </main>
            <footer className="">
                <Footer />
            </footer>
        </>
    );
};

export default Root;