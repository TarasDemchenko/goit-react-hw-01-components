import { FriendItem } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? 'online' : 'offline';

  return (
    <FriendItem>
      <span>{statusClass}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};

export default FriendListItem;
