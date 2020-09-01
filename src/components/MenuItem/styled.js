import styled from 'styled-components';

export const LinkArea = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height:60px;
    background-color: ${props=>props.active ? '#edb92b' : 'transparent'};
    border-radius: 10px;
    margin-bottom: 10px;



`;

export const LinkInco = styled.img`
    width: 34px;
    height: auto;

`;