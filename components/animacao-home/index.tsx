import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import Home from "@/app/page";
import { Refresh } from "@/components/animacao-home/Refresh";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <Refresh onClick={() => setCount(count + 1)} />
      <Home key={count} />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);