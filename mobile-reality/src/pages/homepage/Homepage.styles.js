import styled from "styled-components";
import { color } from "../../styles/theme";

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 20px;
  text-align: center;

  @media ${({ theme }) => theme.medias.mobile} {
    flex-direction: column;
    gap: 0;
  }
`;

export const TopLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  padding: 100px 20px;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;

export const TopRightSection = styled(TopLeftSection)`
  display: block;
  @media ${({ theme }) => theme.medias.mobile} {
    flex-direction: column;
    display: flex;
  }
`;

export const BottomSection = styled(TopSection)``;

export const BottomLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;

export const BottomRightSection = styled(BottomLeftSection)``;

export const SeeMoreButton = styled.button`
  padding: 10px 20px;
  border: ${color.lightBlue} solid 1px;
  border-radius: 8px;
  width: 50%;
  color: ${color.lightBlue};
  margin: 20px auto 20px auto;
  cursor: pointer;
  background-color: white;
`;

export const Header = styled.h1`
  text-transform: uppercase;
`;
export const SubHeader = styled(Header)`
  font-size: 26px;
  padding: 20px 0;
  color: ${color.lightBlue};
`;

export const SectionText = styled.p``;

export const Image = styled.img`
  width: 50%;
  height: 200px;
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;
