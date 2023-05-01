import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

import { Section } from '../_reusable/Section.styled';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        ))}
      </List>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
