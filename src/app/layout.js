import { Public_Sans } from "next/font/google";
import "antd/dist/reset.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import "./styles/globals.css";
import ThemeContextProvider from "@/contexts/ThemeContext";
import ReduxStoreProvider from "@/contexts/ReduxStoreProvider";

const publicSanse = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // const result = authChecker();

  return (
    <html lang="en">
      <body className={`${publicSanse.variable}  antialiased`}>
        <AntdRegistry>
          <ReduxStoreProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </ReduxStoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
