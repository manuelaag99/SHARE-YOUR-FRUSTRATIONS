import { LiveReload, Outlet } from "@remix-run/react";

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
      </head>
      <body>
        <h1>SHARE YOUR FRUSTRATIONS</h1>
        <h2>Remember what they say: Expression is the opposite of depression.</h2>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}