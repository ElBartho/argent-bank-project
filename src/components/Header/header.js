import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  box-sizing: border-box;
`;

export const HomeLogo = styled.img`
  max-width: 100%;
  width: 200px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  &:hover {
    text-decoration: underline;
  }
`;

export const IconLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
