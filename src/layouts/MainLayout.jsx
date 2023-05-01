// layouts/MainLayout.js

import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Footer } from "flowbite-react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 text-white bg-slate-900">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

const MainContent = ({ children }) => {
  return (
    <main className="overflow-y-auto relative p-2 w-full h-full">
      {children}

      <div className="mx-4 mt-4">
        <Footer container={true}>
          <Footer.Copyright href="http://develop.liorassociados.com.br/" by="Lavvi" year={2023} />
          <Footer.LinkGroup>
            <Footer.Link href="#">Sobre</Footer.Link>
            <Footer.Link href="#">Política de Privacidade</Footer.Link>
            <Footer.Link href="#">Licenciamento</Footer.Link>
            <Footer.Link href="#">Contato</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </div>
    </main>
  );
};

export default MainLayout;
