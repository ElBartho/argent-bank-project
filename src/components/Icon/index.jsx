import UserSvg from '../../assets/img/circle-user-icon.svg';
import SignOutSvg from '../../assets/img/sign-out.svg';
import { StyledIcon } from './icon';

const Icon = ({ title }) => {
  const icons = {
    'User Icon': UserSvg,
    'Sign Out Icon': SignOutSvg,
  };
  return <StyledIcon src={icons[title]} alt={title} />;
};

export default Icon;
