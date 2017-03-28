import React from 'react';
import 'aframe';
import { Scene, Entity, Assets, Box, Animation, Sky, Light, Plane, Text, Camera, Cursor } from 'aframe-react';

const ExperienceScreen = () => {
  return (
    <Scene>
      <Assets>
        <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg" />
        <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
        <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" />
      </Assets>
      <Box position="0 2 -5" rotation="0 45 45" scale="2 2 2" src="#boxTexture">
        <Animation attribute="position" direction="alternate" dur="2000" repeat="indefinite"
          to="0 2.2 -5"></Animation>
        <Animation attribute="rotation" begin="click" dur="2000" to="360 405 45"></Animation>
        <Animation attribute="scale" begin="mouseenter" dur="300" to="2.3 2.3 2.3"></Animation>
        <Animation attribute="scale" begin="mouseleave" dur="300" to="2 2 2"></Animation>
      </Box>
      <Sky height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"></Sky>
      <Light type="ambient" color="#445451"></Light>
      <Light type="point" intensity="2" position="2 4 4"></Light>
      <Plane src="#groundTexture" rotation="-90 0 0" height="100" width="100"></Plane>
      <Text value="Hello, A-Frame!" color="#BBB" position="-0.9 0.2 -3" scale="1.5 1.5 1.5"></Text>
      <Camera>
        <Cursor color="#FAFAFA" />
      </Camera>
    </Scene>
  )
}

export default ExperienceScreen;
