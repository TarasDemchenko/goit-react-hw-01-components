export const StatisticsProfile = ({ items }) => {
  return (
    <ul>
      <h2>Upload stats</h2>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.label}</span>
          <span>{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
};
