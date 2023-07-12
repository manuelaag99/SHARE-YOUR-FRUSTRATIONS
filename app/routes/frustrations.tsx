import { db } from "~/utils/db.server";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

export const loader = async () => {
    return json({
        frustrationListItems: await db.frustration.findMany({
            take: 4
        }),
    });
};

export default function Frustrations () {
    const data = useLoaderData<typeof loader>();
    
    return (
        <main>
            <div>
                <div className="frustrations-links-container">
                    <Link className="frustrations-button" to="new">Share my own frustration</Link>
                    <Link className="frustrations-button" to=".">See someone's frustration</Link>
                </div>
            </div>
            <div className="frustrations-list-container">
                <div className="frustrations-list-text">
                    Click on each person's name to see their frustration.
                </div>
                <ul>
                    {data.frustrationListItems.map(({ id, author }) => {
                        return <li key={id}>
                            <Link to={id}>
                                {author}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </main>
    );
}