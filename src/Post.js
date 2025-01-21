import './Post.css'; 
function Css() {
    return (
        <>
            <div className="insta-post">
                <div className="post-header">
                    <img className="profile-pic" src="https://via.placeholder.com/50" alt="Profile" />
                    <span className="username">User Name</span>
                </div>

                <div className="post-image">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.Uw6dIgYVHljdwgCi-i1M7gHaE8&pid=Api&P=0&h=180" alt="Post" />
                </div>

                <div className="post-actions">
                    <span>❤️</span>
                    <span>💬</span>
                    <span>🔗</span>
                </div>

                <div className="post-caption">
                    <p><b>User Name</b> This is a caption for the post. #example #instapost</p>
                </div>
            </div>
        </>
    );
}

export default Css;