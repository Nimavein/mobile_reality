import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f0f8ff;
  display: flex;
  padding: 24px;
  font-size: 18px;

  @media ${({ theme }) => theme.medias.mobile} {
    padding: 16px;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  font-weight: 500;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
