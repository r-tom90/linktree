import { useState } from "react";

import "./index.css";
import { ButtonLink, Profile } from "./components";

function App() {
  return (
    <div className="flex h-auto w-auto flex-col bg-slate-200 py-10">
      <div className="my-auto flex min-w-[370px] flex-col items-center">
        <Profile />
        <ButtonLink />
      </div>
    </div>
  );
}

export default App;
