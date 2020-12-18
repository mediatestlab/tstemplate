import React, {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components/native';

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
  Footer = styled.Text`
    color: #666;
    font-size: 12px;
    font-weight: 600;
    text-align: left;
    padding: 5px;
    border-top-width: 2px;
    border-top-color: #b22222;
  `;

const App: FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeArea>
        <Content>
          <Logo>{reactLogo}</Logo>
          <Title>Styled Components</Title>
        </Content>
        <Footer>&copy; 2020, ATA, MediaTestLab</Footer>
      </SafeArea>
    </>
  );
};

export default App;
