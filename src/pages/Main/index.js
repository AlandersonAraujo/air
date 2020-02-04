import React from 'react';
import logo from '~/assets/avatargit.png';
import logo2 from '~/assets/gol.png';
import logo3 from '~/assets/paulo.png';
import logo4 from '~/assets/code.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  Logo,
  Content,
  ContentCard,
  TextCard,
  TextCard2,
  ContentCard2,
  Card,
  CardTop,
  CardTopLeft,
  Logo2,
  CardLeft,
  CardDownLeft,
  TextCardLeft,
  TextCardLeft2,
  Logo3,
  Line,
  Information,
  InformationCard,
  InformationText,
  InformationText2,
  Ball,
  BallContent,
  Ball2,
  TextBall,
  TextFooter,
  Logo4,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header>
        <Icon name="arrow-left" size={25} color="#FFF" />
        <Logo source={logo} />
      </Header>
      <Content>
        <ContentCard>
          <TextCard>FOR</TextCard>
          <TextCard2>Fortaleza</TextCard2>
        </ContentCard>
        <ContentCard2>
          <Icon name="airplane-takeoff" size={25} color="#fff" />
          <TextCard2>3h 15m</TextCard2>
        </ContentCard2>
        <ContentCard>
          <TextCard>GRU</TextCard>
          <TextCard2>São Paulo</TextCard2>
        </ContentCard>
      </Content>
      <Card>
        <CardTop>
          <CardLeft>
            <CardTopLeft>
              <Logo2 source={logo2} />
            </CardTopLeft>
            <Icon
              name="bag-personal"
              size={25}
              color="#ff7121"
              style={{marginRight: 105}}
            />
            <CardDownLeft>
              <TextCardLeft>Preço</TextCardLeft>
              <TextCardLeft2>R$ 350,00</TextCardLeft2>
            </CardDownLeft>
          </CardLeft>
          <Logo3 source={logo3} />
        </CardTop>
        <Line />
        <Information>
          <InformationCard>
            <InformationText>DATA</InformationText>
            <InformationText2>19/05</InformationText2>
          </InformationCard>
          <InformationCard>
            <InformationText>PORTÃO</InformationText>
            <InformationText2>B2</InformationText2>
          </InformationCard>
          <InformationCard>
            <InformationText>LOCALIZADOR</InformationText>
            <InformationText2>KB76</InformationText2>
          </InformationCard>
        </Information>
        <Information>
          <InformationCard>
            <InformationText>HORA</InformationText>
            <InformationText2>8:35 am</InformationText2>
          </InformationCard>
          <InformationCard>
            <InformationText>ASSENTO</InformationText>
            <InformationText2>19A</InformationText2>
          </InformationCard>
          <InformationCard>
            <InformationText>CLASSE</InformationText>
            <InformationText2>Econômica</InformationText2>
          </InformationCard>
        </Information>
        <BallContent>
          <Ball />
          <TextBall>
            {' '}
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -{' '}
          </TextBall>
          <Ball2 />
        </BallContent>
        <TextFooter>Cartão de embarque</TextFooter>
        <Logo4 source={logo4} />
      </Card>
    </Container>
  );
}
