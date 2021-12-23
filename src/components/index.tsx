import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Shape from './Shape';
import History from './History';
import LinkBar from './LinkBar';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Shape />
      <LinkBar />
      <Header />
      <Projects />
      <History />
      <Footer />
    </>
  );
}
