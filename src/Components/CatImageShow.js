import React from 'react'
import styled from 'styled-components';

const ImageConainer = styled.div`
  margin: auto;
  width: 400px;
  height: 400px;
  line-height: 300px;
  text-align: center;
`
const Image = styled.img`
  max-width:100%;
  max-height:100%;
  vertical-align: middle;
`;

function CatImageShow(props) {

  return(
    <ImageConainer>
      <Image src={props.url} alt='cat picture'/>
    </ImageConainer>
  )
}

export default CatImageShow
