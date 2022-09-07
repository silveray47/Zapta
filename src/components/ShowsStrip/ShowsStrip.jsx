import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function ShowsStrip() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
        <Carousel 
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            >
        <div><Card showId = '1' /></div>
        <div><Card showId = '2' /></div>
        <div><Card showId = '3' /></div>
        <div><Card showId = '4' /></div>
        <div><Card showId = '5' /></div>
        <div><Card showId = '6' /></div>
        <div><Card showId = '7' /></div>
        <div><Card showId = '8' /></div>
        <div><Card showId = '9' /></div>
        <div><Card showId = '10' /></div>
        </Carousel>;
    </div>
  )
}

export default ShowsStrip
