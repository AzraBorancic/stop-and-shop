import React from 'react';
import {Card} from "semantic-ui-react";

const CategoryCard = ({ category }) => {
    return (
        <Card>
            {category.image}
            <Card.Content>
                <Card.Header textAlign={"center"}>{ category.name }</Card.Header>
            </Card.Content>
        </Card>
    );
};

export default CategoryCard;
