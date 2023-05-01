import { PropTypes } from 'prop-types';

import { Section } from 'utils/Section.styled';
import {
  Table,
  Header,
  List,
  ThText,
  Body,
  Key,
  TbText,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Table>
        <Header>
          <List>
            <ThText>Type</ThText>
            <ThText>Amount</ThText>
            <ThText>Currency</ThText>
          </List>
        </Header>

        <Body>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <Key key={id}>
                <TbText>{type}</TbText>
                <TbText>{amount}</TbText>
                <TbText>{currency}</TbText>
              </Key>
            );
          })}
        </Body>
      </Table>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
