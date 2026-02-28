import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Car Scroll Animation',
  description: 'Premium scroll-driven car animation with GSAP',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-blue-200 selection:text-blue-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
