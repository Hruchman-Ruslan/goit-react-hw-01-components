import PropTypes from 'prop-types';

import { Section } from 'utils/Section.styled';

import {
  Wrapper,
  Img,
  Name,
  Social,
  Location,
  List,
  Item,
  Quantity,
  Label,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <Section>
      <Wrapper>
        <Img src={avatar} alt={username} />
        <Name>{username}</Name>
        <Social>@{tag}</Social>
        <Location>{location}</Location>
      </Wrapper>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </List>
    </Section>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
