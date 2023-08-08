const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? 'online' : 'offline';

  return (
    <li className="item">
      <span className={`status ${statusClass}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;