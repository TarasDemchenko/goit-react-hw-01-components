import FriendList from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';
import { StatsProfile } from './Statistic/StatsProfile';
import profileItems from './data.json';
import userProfile from './user.json';
import friends from './FriendList/friends.json';
import transaction from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile user={userProfile} />
      <StatsProfile user={userProfile} />
      <Statistics title="Upload stats" items={profileItems} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
      <GlobalStyle />
    </div>
  );
};
