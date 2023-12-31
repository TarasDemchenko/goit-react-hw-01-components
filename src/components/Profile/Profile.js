import { SectionProfile, Photo } from './Profile.styled';

export const Profile = ({ user: { avatar, username, tag, location } }) => {
  return (
    <SectionProfile>
      <Photo src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </SectionProfile>
  );
};
