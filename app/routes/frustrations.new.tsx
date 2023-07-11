export default function AddFrustration () {
    return (
        <form method="post" action="">    
            <label className="forms forms-label" htmlFor="new-frustration">Share YOUR frustration!
                <input className="forms forms-input" id="new-frustration" type="text" required />
            </label>
            <label className="forms forms-label" htmlFor="new-frustration-author">Author (optional)
                <input className="forms forms-input" id="new-frustration-author" type="text" />
            </label>
            <button className="forms forms-button" type="submit">SHARE</button>
        </form>
    );
}