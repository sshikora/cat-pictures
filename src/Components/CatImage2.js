import React from 'react'
import styled from 'styled-components'
import CatImageShow from './CatImageShow'
import client from '../Client/client'

const ButtonContainer = styled.div`
  margin: auto;
  width: 400px;
  text-align: center;
`


class CatImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      catImageIndex:-1,
      catImageObjs:[],
    }
  }

  async componentDidMount() {
    const catImage = await client.getRandomImage()
    let catImageObjsArray = this.state.catImageObjs
    catImageObjsArray.push(catImage)
    this.setState({catImageIndex:this.state.catImageIndex + 1})
    this.setState({catImageObjs:catImageObjsArray})
  }

  async handleRandomButton() {
    const catImage = await client.getRandomImage()
    let catImageObjsArray = this.state.catImageObjs
    catImageObjsArray.push(catImage)
    this.setState({catImageUrls:catImageObjsArray})
    this.setState({catImageIndex:catImageObjsArray.length - 1})
  }

  handleNextButton() {
    if (this.state.catImageIndex < this.state.catImageObjs.length-1){
      this.setState({catImageIndex:this.state.catImageIndex + 1})
    }
  }

  handlePreviousButton() {
    if (this.state.catImageIndex > 0){
      this.setState({catImageIndex:this.state.catImageIndex - 1})
    }
  }

  render() {

    let catObj = {"url":"", "breed":{'name':'', 'life_span':''}}
    if (this.state.catImageObjs.length) {
      catObj = this.state.catImageObjs[this.state.catImageIndex]
    }
    const breedName = catObj.breed['name']
    return(
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <CatImageShow url={catObj.url}/>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='breed_name'>
                Breed Name: {catObj.breed['name']}
              </div>
              <div className='life_span'>
                Life Span: {catObj.breed['life_span']}
              </div>
              <div className='image_url'>
                Image Url: {catObj.url}
              </div>
              <ButtonContainer className='row'>
                <button type="button" className="col btn btn-secondary" onClick={() => this.handlePreviousButton()}>Previous</button>
                <div className='col-2'/>
                <button type="button" className="col btn btn-primary" onClick={() => this.handleRandomButton()}>Random</button>
                <div className='col-2'/>
                <button type="button" className="col btn btn-secondary" onClick={() => this.handleNextButton()}>Next</button>
              </ButtonContainer>
            </div>
          </div>
        </div>

    )
  }
}

export default CatImage
