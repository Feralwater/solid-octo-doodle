import React from 'react';
import {
  Circle, CirclesSetOne, CirclesSetTwo, MeshLoader,
} from './Loader.styles';

export const Loader = () => (
  <MeshLoader>
    <CirclesSetOne>
      <Circle />
      <Circle />
    </CirclesSetOne>
    <CirclesSetTwo>
      <Circle />
      <Circle />
    </CirclesSetTwo>
  </MeshLoader>
);
