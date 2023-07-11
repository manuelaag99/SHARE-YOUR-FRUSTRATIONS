import { Links, LiveReload, Outlet } from "@remix-run/react";

import stylesUrl from "./styles/global-styles.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <h1 className="page-title">SHARE YOUR FRUSTRATIONS</h1>
        <h2>Remember what they say: Expression is the opposite of depression.</h2>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}