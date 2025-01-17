import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/theme-provider';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DP Ocean',
  description: 'A Digital Product Platform.',
};

export default function RootLayout({ children }:any) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
