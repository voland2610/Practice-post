import { useState } from "react";
import styles from "../styles/postCard/Post.module.css";

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [isActive, setIsActive] = useState(false);
  // useEffect(()=>{
  //     fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${post.postId}`)
  //     .then((response)=> response.json())
  //     .then((json)=> setComments(json))
  // },[])

  function showComments() {
    if (isActive) {
      setIsActive(false);
      return;
    }

    if (comments.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/comments/?postId=" + post.id)
        .then((response) => response.json())
        .then((json) => {
          setComments(json);
          setIsActive(true);
        });
    } else {
      setIsActive(true);
    }
  }

  return (
    <div className={styles.post_card}>
      <h2 className={styles.post_title}>{post.title}</h2>

      <p className={styles.post_body}>{post.body}</p>

      <div className={styles.post_footer}>
        <button onClick={showComments} className={styles.comment_btn}>
          Комментарии
        </button>
      </div>
      {isActive &&
        comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.comment_name}>{comment.name}</div>
            <div className={styles.comment_email}>{comment.email}</div>
            <div className={styles.comment_body}>{comment.body}</div>
          </div>
        ))}
    </div>
  );
};

export default Post;
