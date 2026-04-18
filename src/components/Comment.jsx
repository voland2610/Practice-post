import styles from "../styles/Comments/Comment.module.css";

const Comment = ({ comment }) => {
  return (
    <div className={styles.comments_container}>
      <div className={styles.comment_card}>
        <h4 className={styles.comment_title}>{comment.name}</h4>
        <p className={styles.comment_body}>{comment.body}</p>
        <p className={styles.comment_email}>
          <span>Email:</span> {comment.email}
        </p>
      </div>
    </div>
  );
};

export default Comment;