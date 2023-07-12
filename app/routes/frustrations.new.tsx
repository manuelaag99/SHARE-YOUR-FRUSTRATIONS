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