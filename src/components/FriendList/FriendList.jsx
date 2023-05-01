import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

import { Section } from 'utils/Section.styled';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <List>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
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
