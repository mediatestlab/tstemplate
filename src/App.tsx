import React, {FC, useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, useWindowDimensions} from 'react-native';
import styled from 'styled-components/native';
// import Orientation from 'react-native-orientation-locker';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const reactLogo = <Icon name="react" size={80} />;

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #f5f5f5;
  `,
  Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
  Logo = styled.Text`
    color: #61dbfb;
  `,
  Title = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: #444;
  `,
  Paragraph = styled.Text`
    color: #666;
    font-size: 16px;
  `,
  Footer = styled.Text`
    color: #666;
    font-size: 12px;
    font-weight: 600;
    text-align: left;
    padding: 5px;
    border-top-width: 2px;
    border-top-color: #61dbfb;
  `;

const App: FC = () => {
  const {width, height} = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(width < height ? true : false);

  useEffect(() => {
    const value = width < height ? true : false;
    setIsPortrait(value);
  }, [width, height]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeArea>
        <Content>
          <Logo>{reactLogo}</Logo>
          <Title>React Native / TypeScript</Title>
          <Paragraph>{isPortrait ? 'Portrait' : 'Landscape'}</Paragraph>
          <Paragraph>
            Device dimensions: {width.toFixed()} x {height.toFixed()}
          </Paragraph>
        </Content>
        <Footer>&copy; 2020, ata@mediatestlab</Footer>
      </SafeArea>
    </>
  );
};

export default App;
