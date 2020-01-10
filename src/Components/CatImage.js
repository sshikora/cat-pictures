import React from 'react'
import CatImageShow from './CatImageShow'
import client from '../Client/client'

class CatImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      catImageUrl:'',
      catImageBreed:'',
      catImageLifeSpan:''
    }
  }

  async componentDidMount() {
    const catImage = await client.getRandomImage()
    this.setState({catImageUrl:catImage.url})
    this.setState({catImageBreed:catImage.breeds['name']})
    this.setState({catImageLifeSpan:catImage.breeds['life_span']})
  }

  async handleRandomButton() {
    const catImage = await client.getRandomImage()
    this.setState({catImageUrl:catImage.url})
    this.setState({catImageBreed:catImage.breeds['name']})
    this.setState({catImageLifeSpan:catImage.breeds['life_span']})
  }

  handleNextButton() {

  }

  handlePreviousButton() {

  }

  render() {
    // console.log(this.state.catImage.url)
    return(
        <div>
          <CatImageShow url={this.state.catImageUrl}/>
          <div className='breed_name'>
            BreedName: {this.state.catImageBreed}
          </div>
          <div className='life_span'>
            Life Span: {this.state.catImageLifeSpan}
          </div>
          <div className='image_url'>
            Image Url: {this.state.catImageUrl}
          </div>
          <button onClick={() => this.handlePreviousButton()}>Previous</button>
          <button onClick={() => this.handleRandomButton()}>Random</button>
          <button onClick={() => this.handleNextButton()}>Next</button>
        </div>

    )
  }
}

export default CatImage
