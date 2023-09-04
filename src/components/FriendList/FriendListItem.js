import { FriendItem, StatusSpan } from './FriendList.styled';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <StatusSpan style={{ backgroundColor: isOnline ? 'green' : 'red' }} />
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};

export default FriendListItem;
