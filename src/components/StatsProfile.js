export const StatsProfile = ({
  user: {
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ul>
      <li>
        <span>followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  );
};
