import {
  ListStats,
  ListItem,
  SectionStats,
  ItemStats,
} from './Statistics.styled';

import { getRandomColor } from '../../JS/Color';

export const Statistics = ({ title, items }) => {
  return (
    <SectionStats>
      {title && <ItemStats>{title}</ItemStats>}
      <ListStats>
        {items.map(item => (
          <ListItem key={item.id} style={{ backgroundColor: getRandomColor() }}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </ListItem>
        ))}
      </ListStats>
    </SectionStats>
  );
};
