import { Rubik } from 'next/font/google';

import './globals.css'

const font = Rubik({
  subsets:['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata = {
  title: 'Agri-Tech Hackathon 2024',
  description: "Uniting innovative thinkers nationwide to create groundbreaking solutions for the critical challenges in today's agricultural landscape",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
