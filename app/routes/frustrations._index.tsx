import specificFrustrationStylesUrl from "../styles/specific-frustration-styles.css";
import { json, type LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: specificFrustrationStylesUrl },
];

export const loader = async () => {
    const count = await db.frustration.count();
    const randomRowNumber = Math.floor(Math.random() * count);
    const [randomFrustration] = await db.frustration.findMany({
        skip: randomRowNumber,
        take: 1
    });
    return json({ randomFrustration });
};

export default function FrustrationsIndexRoute () {
    const data = useLoaderData<typeof loader>();

    return (
        <div className="frustration-display">
            <h3>Here's someone's frustration:</h3>
            <p className="frustration">"{data.randomFrustration.content}"</p>
            <p className="author">{data.randomFrustration.author}</p>
        </div>
    );
}