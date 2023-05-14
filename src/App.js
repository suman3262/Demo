import { useEffect, useState } from "react";
import ChatHome from "./components/ChatHome";
import Header from "./components/Header";


function App() {



  return (
    <div className="w-[375px] mx-auto my-5 max-h-[100vh] 
    bg-[#FAF9F4] rounded-tl-[28px] rounded-tr-[28px] rounded-bl-[28px] rounded-br-[28px] border-2">
      <Header
      />
      <ChatHome/>
    </div>
  );
}

export default App;
