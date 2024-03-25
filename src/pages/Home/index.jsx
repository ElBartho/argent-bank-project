import {
  Main,
  Hero,
  HeroContent,
  Title,
  SubTitle,
  Text,
  Features,
} from './home';
import Feature from '../../components/Feature';
import IconChat from '../../assets/img/icon-chat.png';
import IconMoney from '../../assets/img/icon-money.png';
import IconSecurity from '../../assets/img/icon-security.png';

const Home = () => {
  const features = [
    {
      title: 'You are our #1 priority',
      image: IconChat,
      alt: 'Chat Icon',
      text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      title: 'More savings means higher rates',
      image: IconMoney,
      alt: 'Money Icon',
      text: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      title: 'Security you can trust',
      image: IconSecurity,
      alt: 'Security Icon',
      text: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];

  return (
    <Main>
      <Hero>
        <HeroContent>
          <Title>Promoted Content</Title>
          <SubTitle>No fees.</SubTitle>
          <SubTitle>No minimum deposit.</SubTitle>
          <SubTitle>High interest rates.</SubTitle>
          <Text>Open a savings account with Argent Bank today!</Text>
        </HeroContent>
      </Hero>
      <Features>
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </Features>
    </Main>
  );
};

export default Home;
