import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import { NextUIProvider } from "@nextui-org/system";
import "./tailwind.css";

import NavBar from "./components/navbar/navbar";
import SnapScrollLayout from "./components/navbar/SnapScrollLayout";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <NavBar />
          <SnapScrollLayout />
          <ScrollRestoration />
          <Scripts />
        </NextUIProvider>
      </body>
    </html>
  );
}
