import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main";
import CustomProvider from "./CustomProvider";
import "../firebase"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    return (
        <BrowserRouter>
            <CustomProvider titulo="Luck soy tu ... App ;]">
                <Header />
                <Main />
                <Footer />
                <ToastContainer/>
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App;