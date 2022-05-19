import React from 'react'
import styled from 'styled-components';
import { FaChevronDown } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';

const Section = ({ title, description, image, rightBtn, leftBtn}) => {
  return (
        <Wrap image={image}>
            <Fade>
                <ItemText>
                    <p className='title'>{title}</p>
                    {description &&
                    <p className='description'>{description}</p>
                    }
                </ItemText>
            </Fade>
                <ButtonGroup>
                    <Fade>
                        <RightButton className='right-btn'>
                            {rightBtn}
                        </RightButton>
                    </Fade>
                {leftBtn && 
                    <Fade>
                        <LeftButton className='left-btn'>
                                {leftBtn}
                        </LeftButton>
                    </Fade>}
                </ButtonGroup>
            <FaChevronDown className='bouncing' />
        </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: ${props => `url("./production/images/${props.image}")`};
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const ItemText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 15vh;
    color: #171a20;
    .title {
        font-size: 35px;
        font-weight: 600;
    }
    .description {
        font-size: 20px;
        margin-top: 5px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10vh;
    flex-grow: 1;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
`

const RightButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 38px;
    background-color: #171a20;
    color: #ffffff;
    border-radius: 100px;
    cursor: pointer;
    opacity: 0.85;
    text-transform: uppercase;
`;
const LeftButton = styled(RightButton)`
    background-color: #fff;
    color: #000000;
    opacity: 0.65;
`

export default Section