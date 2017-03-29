import React from 'react';
import 'aframe';
import {Scene, Entity} from 'aframe-react';
import tableAndChair from '../../models/tableAndChair.dae'
import laminate from '../../models/laminate.jpg'
import obj from '../../models/interior.obj';
import mtl from '../../models/interior.mtl';

const ExperienceScreen = () => {
  return (
    <a-scene vr-mode-ui="enabled: true">
      <a-assets>
       <a-asset-item id="tree-obj" src={obj}></a-asset-item>
       <a-asset-item id="tree-mtl" src={mtl}></a-asset-item>
     </a-assets>

     <a-sky></a-sky>

     <a-camera userHeight="2">
       <a-cursor color="#ffffff"></a-cursor>
     </a-camera>
   </a-scene>
  )
}

export default ExperienceScreen;
