import React from 'react'
import { FiArrowRight } from "react-icons/fi"

import { Container } from './styles';

export default function Button({label = 'Button', iconArrowRight, iconColor, sizeIcon ,  ...props}) {
  return (
    <>
      <Container {...props}>
            <span>{label}</span>
            {iconArrowRight && <FiArrowRight color={iconColor} size={sizeIcon} />}
      </Container>
    </>
  )
}
