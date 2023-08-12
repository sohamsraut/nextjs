import '@/styles/globals.css';
import { ToastContainer } from 'react-toastify';



export default function App({ Component, pageProps }) {
    return (
      <div className="flex flex-col w-screen flex-wrap h-screen">
        <Component {...pageProps} />
      </div>
    );
}