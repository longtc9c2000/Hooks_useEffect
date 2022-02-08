import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [posts, setPost] = useState([]);
  const [type, setType] = useState("posts");
  const [goTop, setGoTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((post) => {
        setPost(post);
      });
  }, [type]);

  useEffect(() => {
    function handleScroll() {
      // if(window.scrollY >= 200){
      //   setGoTop(true)
      // }else{
      //   setGoTop(false)
      // }
      // or |
      //    V
      setGoTop(window.scrollY >= 200);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333"
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>

      {goTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20
          }}
        >
          Go top
        </button>
      )}
    </div>
  );
}

export default Content;
