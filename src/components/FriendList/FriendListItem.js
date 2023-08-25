import { FriendItem, Offline, Online } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? <Online /> : <Offline />;

  return (
    <FriendItem>
      <span>{statusClass}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};

export default FriendListItem;
