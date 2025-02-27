import React from 'react';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1 className="text-4xl font-bold">Welcome to the Next.js App</h1>
        <p className="mt-4">This is the main entry point of the application.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;