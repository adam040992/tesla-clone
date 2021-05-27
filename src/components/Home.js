import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivey"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existiong inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivey"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existiong inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivey"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existiong inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivey"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existiong inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantinee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Order Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;
