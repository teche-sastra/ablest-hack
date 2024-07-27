import { Ubuntu } from 'next/font/google';

import './globals.css'

const ubuntu = Ubuntu({
  subsets:['latin'],
  weight:'400',
});

export const metadata = {
  title: 'Agri-Tech Hackathon 2024',
  description: "Uniting innovative thinkers nationwide to create groundbreaking solutions for the critical challenges in today's agricultural landscape",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
