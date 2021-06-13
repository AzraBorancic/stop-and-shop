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
    {name: 'Bread and Pastries', image: <Image size="large" src={
        "https://amkoshop.ba/assets/img/categories/pastriesAndCakes.jpg"
        }/>},
    {name: 'Eggs and Dairy Products', image: <Image size="large" src={
            "https://amkoshop.ba/assets/img/categories/dairyAndEggs.jpg"
        }/>},
    {name: 'Meat and Meat Produce', image: <Image size="large" src={
        "https://amkoshop.ba/assets/img/categories/meatAndMeatProducts.jpg"
        }/>},
    {name: 'Base Ingredients', image: <Image size="large" src={
        "https://amkoshop.ba/assets/img/categories/grocieriesForFoodMaking.jpg"
        }/>},
    {name: 'Drinks', image: <Image size="large" src={
        "https://amkoshop.ba/assets/img/categories/drinks.jpg"
        }/>},
    {name: 'Sweets and Snacks', image: <Image size="large" src={
        "https://amkoshop.ba/assets/img/categories/sweetsAndSnacks.jpg"
        }/>},
    {name: 'Baby Care', image: <Image size="large" src={
        "https://amkoshop.ba/assets/img/categories/babyProgram.jpg"
        }/>},
    {name: 'Face and Body Care', image: <Image size="large" src={
        "https://amkoshop.ba/assets/img/categories/bodyAndFaceCare.jpg"
        }/>},
    {name: 'Cleaning Agents', image: <Image size="large" src={
        "https://amkoshop.ba/assets/img/categories/cleaningAgents.jpg"
        }/>},
    {name: 'Hygiene and Cleaning Products', image: <Image size="large" src={
        "https://amkoshop.ba/assets/img/categories/higeneAndPaperProducts.jpg"
        }/>},
    {name: 'House Necessities', image: <Image size="large" src={
        "https://amkoshop.ba/assets/img/categories/houseNecessities.jpg"
        }/>}
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
