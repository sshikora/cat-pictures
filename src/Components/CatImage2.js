import React from 'react'
import CatImageShow from './CatImageShow'
import client from '../Client/client'

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
    this.setState({catImageObjs:catImageObjsArray})
    this.setState({catImageIndex:this.state.catImageIndex++})
  }

  async handleRandomButton() {
    const catImage = await client.getRandomImage()
    let catImageObjsArray = this.state.catImageObjs
    catImageObjsArray.push(catImage)
    this.setState({catImageUrls:catImageObjsArray})
    this.setState({catImageIndex:this.state.catImageIndex++})
  }

  handleNextButton() {

  }

  handlePreviousButton() {

  }

  render() {

    const catObj = this.state.catImageObjs[this.state.catImageIndex]
    return(
        <div>
          <CatImageShow url={catObj.url}/>
          <div className='breed_name'>
            BreedName: {catObj.breed['name']}
          </div>
          <div className='life_span'>
            Life Span: {catObj.breed['life_span']}
          </div>
          <div className='image_url'>
            Image Url: {catObj.url}
          </div>
          <button onClick={() => this.handlePreviousButton()}>Previous</button>
          <button onClick={() => this.handleRandomButton()}>Random</button>
          <button onClick={() => this.handleNextButton()}>Next</button>
        </div>

    )
  }
}

export default CatImage
