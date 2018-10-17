import React from "react";
import { Header } from "/imports/ui/components/header";

export const MainLayout = ({ children }) => {
  return (<div className="main_layout">
    <header>
      <Header />
    </header>
    <main role="main" className="container">
      <div className="wrapper">
        <content>
          {children}
        </content>
      </div>
    </main>
  </div>);
}
