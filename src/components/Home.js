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

            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivey"
                backgroundImg="model-y.jpg"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;
