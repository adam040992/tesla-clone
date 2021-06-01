import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <Container>
            <Logo>
                <img src="/images/logo.svg" alt="Tesla Logo" />
            </Logo>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu />
            </RightMenu>
            <BurgerNav>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Inventory</a></li>
                <li><a href="#">Inventory</a></li>
                <li><a href="#">Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    display: flex;
    min-height: 60px;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
`


const Logo = styled.a``;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    @media (max-width: 768px) {
        display: none;
    }
    
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    
    @media (min-width: 768px) {
        display: none;
    }
`;