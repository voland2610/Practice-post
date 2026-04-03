import { useEffect, useState } from "react";
import Post from "./Post";
import styles from "../styles/postCard/Post.module.css";

const PostCard = () => {
  const [posts, usePosts] = useState([]);
  const [isLouding, setIsLouding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          usePosts(json);
          setIsLouding(false);
        });
    }, 1000);
  }, []);
  return (
    <>
      {isLouding ? (
        <div className={styles.Louding}>"Загрузка..."</div>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostCard;
