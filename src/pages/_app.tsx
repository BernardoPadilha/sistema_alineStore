import type { AppProps } from "next/app";

// Config Font Poppins
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Import CSS global styles
import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
