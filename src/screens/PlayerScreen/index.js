import React, { useState } from 'react';
import { Slider } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MoreVertIcon } from '../../components/icons/MoreVert';
import { ChevronIcon } from '../../components/icons/Chevron';
import { PlayIcon } from '../../components/icons/Play';

import styled from 'styled-components';

const Background =  ({ children }) => {
  return (
    <LinearGradient
    colors={['#464769', '#1B1A1F']}
    style={{ 
      flex: 1, 
      paddingTop: 50,
    }}
    > 
      { children }
    </LinearGradient>
  );
}

const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;

TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;

TopBar.Right = styled.View`
  flex: 1; 
  align-items: flex-end;
  padding-right: 16px;
`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`; 

TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`; 

/* =============================== */

const ScreenArea = styled.View`
  flex: 1;
  padding: 0 32px 32px;
`;

const CoverArea = styled.View`
  flex: 2;
`;

CoverArea.Image = styled.Image`
  flex: 1;
  width: 100%;
`; 

const PlayerArea = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
  color: white; 
  font-size: 22px;
`;

PlayerArea.Author = styled.Text`
  color: #BBB;
  font-size: 16px; 
`;

const Controls = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

Controls.Slider = styled.View`
  flex-wrap: wrap;
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;

Controls.Slider.CurrentTime = styled.Text`
  color: #BBB;
`;

Controls.Slider.TotalTime = styled.Text`
  color: #BBB;
`;

Controls.Play = styled.TouchableOpacity`

`;

function PlayerScreen() {
  const [ seconds, setSeconds ] = useState(0);

  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <ChevronIcon />
        </TopBar.Left>

        <TopBar.Middle>
          <TopBar.Title>Tocando Podcast</TopBar.Title>
          <TopBar.SubTitle>Hipsters Ponto Tech</TopBar.SubTitle>
        </TopBar.Middle>

        <TopBar.Right>
          <MoreVertIcon />
        </TopBar.Right>
      </TopBar>

      <ScreenArea>
        <CoverArea>
          <CoverArea.Image
            resizeMode="contain"
            source={{ 
              uri: 'https://placehold.it/750x750', 
            }}
          />
        </CoverArea>

        <PlayerArea>
          <PlayerArea.Title>Angular vs React - Hipster #142</PlayerArea.Title>
          <PlayerArea.Author>Hipster Ponto Tech</PlayerArea.Author>
        </PlayerArea>

        <Controls>
          <Controls.Slider>
            <AudioSlider 
              minimunValue={0}
              maximunValue={100}
              thumbTintColor="#FFF"
              minimunTrackTintColor="#1DD65F"
              maximumTrackTintColor="#777"
              value={seconds}
              onValueChange={(value) => {
                setSeconds(value);
              }}
            />

            <Controls.Slider.CurrentTime>00:{ seconds }</Controls.Slider.CurrentTime>

            <Controls.Slider.TotalTime>52:07</Controls.Slider.TotalTime>
          </Controls.Slider>
          
          <Controls.Play>
            <PlayIcon
              width={88}
              height={88}
            />
          </Controls.Play>
        </Controls>
      </ScreenArea>
    </Background>
  );
}

export default PlayerScreen;