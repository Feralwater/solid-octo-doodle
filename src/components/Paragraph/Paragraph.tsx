import React from 'react';
import { StyledParagraph } from 'components/Paragraph/Paragraph.styles';

interface IParagraph {
  children: string;
}

export const Paragraph = ({ children }:IParagraph) => (
  <StyledParagraph>
    {children}
  </StyledParagraph>
);
