import { redirect, type ActionArgs } from "@remix-run/node";

import { db } from "../utils/db.server";

export const action = async ({ request }: ActionArgs) => {
    const form = await request.formData();
    const content = form.get("content");
    const author = form.get("author");
    if (typeof content !== "string" || typeof author !== "string") {
        throw new Error("Form not submitted correctly!");
    }

    const fields = { content, author };

    const frustration = await db.frustration.create({ data: fields });
    return redirect(`/frustrations/${frustration.id}`)
}

export default function AddFrustration () {
    return (
        <form className="forms-container" method="post" action="">    
            <label className="forms forms-label" htmlFor="new-frustration">Share YOUR frustration!
                <input className="forms forms-input" name="content" id="new-frustration" type="text" required />
            </label>
            <label className="forms forms-label" htmlFor="new-frustration-author">Write down your name (optional)
                <input className="forms forms-input" name="author" id="new-frustration-author" type="text" />
            </label>
            <button className="forms forms-button" type="submit">SHARE</button>
        </form>
    );
}