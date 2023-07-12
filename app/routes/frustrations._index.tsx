import specificFrustrationStylesUrl from "../styles/specific-frustration-styles.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: specificFrustrationStylesUrl },
];

export default function FrustrationsIndexRoute () {
    return (
        <div className="frustration-display">
            <h3>Here's someone's frustration:</h3>
            <p className="frustration">"I feel useless all the time."</p>
            <p className="author">Maurice</p>
        </div>
    );
}