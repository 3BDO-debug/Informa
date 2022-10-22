import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
//
import { varFade } from './variants';
// utils
import generateGradient from 'src/utils/gradientGenerator';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

TextAnimate.propTypes = {
  text: PropTypes.string.isRequired,
  variants: PropTypes.object,
  sx: PropTypes.object,
  textVariant: PropTypes.string.isRequired,
  isGradient: PropTypes.bool,
};

export default function TextAnimate({ isGradient, textVariant, text, variants, sx, ...other }) {
  const textSplitted = text.split('');
  const generatedGradients = generateGradient(textSplitted.length);

  const renderLetterColor = (index, letter) => {
    let color = 'inherit';

    if (isGradient) {
      color = generatedGradients[index];
    } else if (letter === ' ') {
      color = 'transparent';
    }

    return color;
  };

  return (
    <Box
      id="letterWrapper"
      component={m.h2}
      sx={{
        typography: textVariant,
        overflow: 'hidden',
        display: 'flex',
        ...sx,
        flexWrap: 'wrap',
      }}
      {...other}
    >
      {textSplitted.map((letter, index) => (
        <m.span
          style={{
            marginLeft: letter === ' ' ? '6px' : '0px',
            marginRight: letter === ' ' ? '6px' : '0px',
            color: renderLetterColor(index, letter),
          }}
          key={index}
          variants={variants || varFade().inUp}
        >
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
