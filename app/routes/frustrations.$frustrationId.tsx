import specificFrustrationStylesUrl from "../styles/specific-frustration-styles.css";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: specificFrustrationStylesUrl },
];

export const loader = async ({ params }: LoaderArgs) => {
    const frustration = await db.frustration.findUnique({
        where: { id: params.frustrationId }
    });
    if (!frustration) {
        throw new Error("Could not find a frustration matching that ID!");
    }
    return json({ frustration });
}

export default function FrustrationRoute () {
    const data = useLoaderData<typeof loader>();

    return (
        <div className="frustration-display">
            <h3>Here's someone's frustration:</h3>
            <p className="frustration">"{data.frustration.content}"</p>
            <p className="author">{data.frustration.author}</p>
        </div>
    );
}