"use client";
import { Provider } from 'react-redux';
import '../../public/uikit/dist/css/uikit.custom-theme.min.css';
import Script from 'next/script';
import store from './redux/store';

/*export const metadata = {
  title: 'MD | Front-End Developer',
  description: 'Generated by create next app',
}*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          {children}
        </body>
        <Script src='/uikit/dist/js/uikit.min.js'></Script>
        <Script src='/uikit/dist/js/uikit-icons.min.js'></Script>
      </Provider>
    </html>
  )
}
