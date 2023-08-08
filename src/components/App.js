import FriendList from './FriendList/FriendList';
import { Profile } from './Profile';
import { StatisticsProfile } from './Statistics';
import { StatsProfile } from './StatsProfile';
import profileItems from './data.json';
import userProfile from './user.json';
import friends from './FriendList/friends.json';
import transaction from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile user={userProfile} />
      <StatsProfile user={userProfile} />
      <StatisticsProfile items={profileItems} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
