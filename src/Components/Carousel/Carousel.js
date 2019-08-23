import React, { Component } from 'react'
import "./Carousel.scss"

class Carousel extends Component {

    state={
        currentImageIndex:0
    }

    handleClick=(i)=>{
        this.setState({
            currentImageIndex:i
        })
    }


    nextSlide=()=>{
        let currentIndex=this.state.currentImageIndex;
        let nextIndex=currentIndex+1;
        const shouldIndexReset=currentIndex === this.props.images.length -1;
        let index=shouldIndexReset ? 0 : nextIndex;
        this.setState({
            currentImageIndex:index
        })

    }

    previousSlide=()=>{
        const previousIndex=this.state.currentImageIndex-1;
        let shouldIndexReset=this.state.currentImageIndex===0;
        const index=shouldIndexReset ? this.props.images.length-1 : previousIndex;
        this.setState({
            currentImageIndex:index
        })
    }

    render() {
        return (
            <div className="carousel">
                <div className="carousel-container">
                    <img src={this.props.images[this.state.currentImageIndex]} alt="alo" />
                    <div className="thumb-arrows">
                    <span className="left" onClick={this.previousSlide}>&lt;</span>
                    <span className="right" onClick={this.nextSlide}>&gt;</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Carousel;