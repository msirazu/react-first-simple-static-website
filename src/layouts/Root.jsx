import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <>
            <header className="">
                <Header />
            </header>
            <main className="min-h-screen bg-gray-50 flex justify-center items-center">
                <Outlet />
            </main>
            <footer className="">
                <Footer />
            </footer>
        </>
    );
};

export default Root;