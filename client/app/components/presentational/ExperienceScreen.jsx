import React from 'react';
import 'aframe';
import laminate from '../../models/laminate.jpg'
import model from '../../models/faume.dae';

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
      <a-entity position="5.60 1.33 0.22" rotation="0 -90 0" geometry="mergeTo:null;primitive:plane;height:2.66;width:6" material="normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"></a-entity>
      <a-entity position="2.64 2.64 0.22" rotation="90 0 0" geometry="mergeTo:null;primitive:plane;height:4.55;width:6" material="normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"></a-entity>
      <a-entity position="2.64 1.33 -2.055" rotation="0 0 0" geometry="mergeTo:null;primitive:plane;height:2.66;width:6" material="normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"></a-entity>
      <a-entity position="2.64 1.33 2.495" rotation="180 0 0" geometry="mergeTo:null;primitive:plane;height:2.66;width:6" material="normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"></a-entity>
      <a-camera userHeight="2">
        <a-cursor color="black"></a-cursor>
      </a-camera>
   </a-scene>
  )
}

export default ExperienceScreen;
