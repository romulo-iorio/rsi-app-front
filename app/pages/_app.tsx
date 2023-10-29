import { AppProps } from "next/app";
import { useEffect, useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);

  if (typeof window === "undefined") return null;

  return render ? <Component {...pageProps} /> : null;
}
export default App;
