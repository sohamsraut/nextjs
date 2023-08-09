import '@/styles/globals.css';
import BaseLayout from '@/layout';
import { useState } from 'react';
import LoaderComponent from '@/components/loader';


export default function App({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(true);
  if (isLoading) {
    setTimeout(() => {setLoading(false);}, 3000);
    return (<LoaderComponent />);
  } else {
    return (
      <div className="flex flex-col w-screen flex-wrap h-screen">
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </div>
    );
  }
}