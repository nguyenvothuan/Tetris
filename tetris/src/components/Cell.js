import React from 'react';
import { TETROMINOS } from '../tetrominos';
import styled from 'styled-components';

const StyledCell = styled.div`
width: auto;
/* border-radius: 5px; */
background: rgba(${props => props.color}, 0.8);
border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
border-bottom-color: rgba(${props => props.color}, 0.1);
border-right-color: rgba(${props => props.color}, 1);
border-top-color: rgba(${props => props.color}, 1);
border-left-color: rgba(${props => props.color}, 0.3);`

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color}>
        {console.log('rerender cell')}
    </StyledCell>
)
export default Cell;