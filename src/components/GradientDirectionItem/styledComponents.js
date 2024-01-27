import styled from 'styled-components'

export const DirectionButtonItem = styled.li`
  list-style: none;
  width: 50%;
  padding: 10px;
  @media screen and (min-width: 576px) {
    width: 25%;
  }
`

export const DirectionButton = styled.button`
  padding: 10px 16px;
  color: white;
  cursor: pointer;
  background-color: ${props => (props.isActive ? 'white' : 'black')};
  color: ${props => (props.isActive ? 'black' : 'white')};
  border: none;
  border-radius: 6px;
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
