import React from 'react';
import {Card, Header, Image} from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import CategoryCard from "../Category/CategoryCard";
import fruitImage from "../Category/CategoryImages/fruitesAndVegetables.jpg";
import carouselImage from "./CarouselImages/Shop-Here-and-Save-Retro-banner.jpeg"

const categories = [
    {
        "name": "Fruits and Vegetables",
        "image": <Image size="large" src={fruitImage}/>
    },
    {name: 'Bread and Pastries', image: <Image size="large" src={fruitImage}/>},
    {name: 'Eggs and Dairy Products', image: <Image size="large" src={fruitImage}/>},
    {name: 'Meat and Meat Produce', image: <Image size="large" src={fruitImage}/>},
    {name: 'Base Ingredients', image: <Image size="large" src={fruitImage}/>},
    {name: 'Drinks', image: <Image size="large" src={fruitImage}/>},
    {name: 'Sweets and Snacks', image: <Image size="large" src={fruitImage}/>},
    {name: 'Baby Care', image: <Image size="large" src={fruitImage}/>},
    {name: 'Face and Body Care', image: <Image size="large" src={fruitImage}/>},
    {name: 'Cleaning Agents', image: <Image size="large" src={fruitImage}/>},
    {name: 'Hygiene and Cleaning Products', image: <Image size="large" src={fruitImage}/>},
    {name: 'House Necessities', image: <Image size="large" src={fruitImage}/>}
]

const Home = () => {
    return (
        <div>
            <Carousel autoPlay showThumbs={false} infiniteLoop interval={5000}>
                <div>
                    <img src={carouselImage} alt="carousel_image"/>
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
                <div>
                    <img src={carouselImage} alt="carousel_image"/>
                    {/*<p className="legend">Legend 2</p>*/}
                </div>
                <div>
                    <img src={carouselImage} alt="carousel_image"/>
                    {/*<p className="legend">Legend 3</p>*/}
                </div>
            </Carousel>
            <Header as='h3' textAlign={"center"}>Browse Categories</Header>
            <Card.Group stackable itemsPerRow={4}>
                {
                    categories.map((item, index) => {
                        return <CategoryCard category={item} key={index}/>
                    })
                }
            </Card.Group>
        </div>
    );
};

export default Home;
