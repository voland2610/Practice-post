import Post from "./Post";
import styles from "../styles/postCard/Post.module.css";
import useFetch from "../hooks/useFetch";
import getPosts from "../api/posts";

const PostCard = () => {
  const { data: posts, isLoading, error } = useFetch(getPosts);

  return (
    <div className={styles.posts_container}>
      {isLoading && <div className={styles.loading}>Загрузка...</div>}

      {error && <div className={styles.error}>Ошибка: {error}</div>}

      {!isLoading && !error && posts?.length === 0 && (
        <div className={styles.empty}>Нет постов</div>
      )}

      {!isLoading &&
        !error &&
        posts?.map((post) => (
          <div key={post.id} className={styles.post_wrapper}>
            <Post post={post} />
          </div>
        ))}
    </div>
  );
};

export default PostCard;