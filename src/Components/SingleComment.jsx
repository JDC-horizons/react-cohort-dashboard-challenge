function SingleComment({ comment, author }) {
  return (
    <div className="comment-content">
      <p className="user-profile-button">{`${author.firstName[0]} ${author.lastName[0]}`}</p>
      <div className="comment-text-area">
        <p className="comment-author">{`${author.firstName} ${author.lastName}`}</p>
        <p>{comment.content}</p>
      </div>
    </div>
  );
}

export default SingleComment;
