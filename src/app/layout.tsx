import './globals.scss';

export const metadata = {
  title: 'Zhuangyou Manage',
  description: 'A modern web application built with Next.js, TypeScript, and SCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}