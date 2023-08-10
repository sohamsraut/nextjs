import '@/styles/globals.css';
import BaseLayout from '@/layout';
// import { useState, useEffect } from 'react';
// import LoaderComponent from '@/components/loader';
// import { useRouter } from 'next/router';


export default function App({ Component, pageProps }) {
    return (
      <div className="flex flex-col w-screen flex-wrap h-screen">
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </div>
    );
}