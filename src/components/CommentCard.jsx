import Comment from "./Comment";
import useFetch from "../hooks/useFetch";
import {getComments} from "../api/comments";

const CommentCard = () => {
  const { data: comments, isLoading, error } = useFetch(getComments);

  return (
    <div>
      {isLoading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}

      {!isLoading &&
        !error &&
        comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentCard;