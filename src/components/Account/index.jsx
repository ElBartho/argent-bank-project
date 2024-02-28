import {
  AccountSection,
  AccountContentWrapper,
  AccountTitle,
  AccountAmount,
  AccountAmountDescription,
  StyledNavLink,
} from './account';
import Button from '../Button';

const Account = ({ title, amount, description, link, data }) => {
  return (
    <AccountSection>
      <AccountContentWrapper>
        <AccountTitle>{title}</AccountTitle>
        <AccountAmount>{amount}</AccountAmount>
        <AccountAmountDescription>{description}</AccountAmountDescription>
      </AccountContentWrapper>
      <StyledNavLink to={link} state={data}>
        <Button
          text='View transactions'
          padding='8px 24px'
          fontSize='1.1rem'
          margin='1rem 0 0 0'
          textColor='#fff'
          borderColor='#00bc77'
          backgroundColor='#00bc77'
          width='100%'
        />
      </StyledNavLink>
    </AccountSection>
  );
};

export default Account;
