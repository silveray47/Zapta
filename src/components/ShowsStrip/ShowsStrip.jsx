import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ccard from '../ccard/Ccard';
import './showsStrip.css'
import { Link } from 'react-router-dom';


function ShowsStrip({showsList}) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
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
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {
                showsList.map((concert,index) => {
                  return(
                    <Link key={index} to={"/Concert/"+concert}>
                      <div><Ccard id={concert}/></div>
                    </Link>
                  )
                })
              }
        </Carousel>
    </div>
  )
}

export default ShowsStrip
