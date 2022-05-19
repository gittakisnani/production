import React, { useReducer, useRef, useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./Modal"


function App() {
  const modalRef = useRef();

  const handleOpen = () => {
    modalRef.current.openModal()
  }
  return (
    <main>
      <Modal ref={modalRef}/>
      <Header />
      <Main />
    </main>
  );
}

export default App;
