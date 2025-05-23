import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout; 