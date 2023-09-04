import { FriendItem, StatusSpan } from './FriendList.styled';

const FriendListItem = ({ friend }) => {
  return (
    <FriendItem>
      <StatusSpan
        style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
      />
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </FriendItem>
  );
};

export default FriendListItem;
