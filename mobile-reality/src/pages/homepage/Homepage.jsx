import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Homepage.styles";
import firstImage from "../../assets/1.png";
import secondImage from "../../assets/2.png";
import thirdImage from "../../assets/3.png";
import fourthImage from "../../assets/4.png";

const Homepage = () => {
  return (
    <S.HomepageContainer>
      <S.TopSection>
        <S.TopLeftSection>
          <S.Header>Kilka słów o nas</S.Header>
          <S.SubHeader>Czyli kim jesteśmy i dokąd zmierzamy</S.SubHeader>
          <S.SectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
            amet tortor dui. Proin eu feugiat urna. Curabitur varius sapien eget
            turpis maximus facilisis. In velit velit, accumsan in efficitur
            eget, pulvinar a velit. Maecenas quis dui volutpat, rhoncus libero
            in, semper massa. Quisque vel urna ornare libero elementum congue.
            Nulla vehicula ante nec ante facilisis vestibulum. Donec sit amet
            eleifend nisl. Vestibulum tincidunt risus id ligula dapibus gravida.
            Donec pulvinar nisl pharetra, lobortis diam ac, rutrum libero. Cras
            vitae nulla sem. Nulla commodo lorem id velit ullamcorper
            sollicitudin. Quisque tempor quam sed risus bibendum, id sodales ex
            ultrices. Ut eget placerat nisi. Nam at elit turpis. Fusce aliquam
            egestas velit vitae commodo.
          </S.SectionText>

          <Link to="/votes">
            <S.SeeMoreButton>Zobacz Więcej </S.SeeMoreButton>
          </Link>
        </S.TopLeftSection>
        <S.TopRightSection>
          <S.Image src={firstImage} />
          <S.Image src={secondImage} />
          <S.Image src={thirdImage} />
          <S.Image src={fourthImage} />
        </S.TopRightSection>
      </S.TopSection>
    </S.HomepageContainer>
  );
};

export default Homepage;
