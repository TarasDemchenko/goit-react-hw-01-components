import { ListStats, ListItem, SectionStats } from './Statistics.styled';
export const StatsProfile = ({
  user: {
    stats: { followers, views, likes },
  },
}) => {
  return (
    <SectionStats>
      <ListStats>
        <ListItem>
          <span>followers</span>
          <span>{followers}</span>
        </ListItem>
        <ListItem>
          <span>views</span>
          <span>{views}</span>
        </ListItem>
        <ListItem>
          <span>likes</span>
          <span>{likes}</span>
        </ListItem>
      </ListStats>
    </SectionStats>
  );
};
