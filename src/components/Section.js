import React from 'react';
import styled from 'styled-components';

function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivey</p>
            </ItemText>

            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        Custom order
                    </LeftButton>
                    <RightButton>
                        Existing inventory
                    </RightButton>
                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/model-s.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const Buttons = styled.div`
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;

const LeftButton = styled.div`
    cursor: pointer;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
`;

const RightButton = styled(LeftButton)``;

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;

`;