const PostList = ({ postArray }) => {
  return (
    <div>
      <ul>
        {postArray
          ? postArray.map((item) => (
              <li key={item.id}>{JSON.stringify(item)}</li>
            ))
          : "the list is empty"}
      </ul>
    </div>
  );
};

export default PostList;
