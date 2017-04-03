import React from 'react';
import 'aframe';
import laminate from '../../models/laminate.jpg'
import model from '../../models/faume_test_alleen_bank.dae';

const ExperienceScreen = () => {
  return (
    <a-scene vr-mode-ui="enabled: true">
      <a-assets>
        <img src={laminate} id="laminate" />
        <a-asset-item id="model" src={model}></a-asset-item>
        <img id="skyTexture"
          src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" />
      </a-assets>

      <a-sky src="#skyTexture"></a-sky>
      <a-collada-model src="#model"></a-collada-model>
      <a-plane src="#laminate" height="4.55" width="6" position="2.64 0 0.22" rotation="-90 0 0"></a-plane>
      <a-camera userHeight="2">
        <a-cursor color="black"></a-cursor>
      </a-camera>
   </a-scene>
  )
}

export default ExperienceScreen;
