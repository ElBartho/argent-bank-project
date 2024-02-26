import {
  AccountSection,
  AccountContentWrapper,
  AccountTitle,
  AccountAmount,
  AccountAmountDescription,
} from './account';
import Button from '../Button';

const Account = ({ title, amount, description }) => {
  return (
    <AccountSection>
      <AccountContentWrapper>
        <AccountTitle>{title}</AccountTitle>
        <AccountAmount>{amount}</AccountAmount>
        <AccountAmountDescription>{description}</AccountAmountDescription>
      </AccountContentWrapper>
      <Button
        text='View transactions'
        padding='8px 24px'
        fontSize='1.1rem'
        margin='1rem 0 0 0'
      />
    </AccountSection>
  );
};

export default Account;
