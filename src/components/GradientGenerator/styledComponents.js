import styled from 'styled-components'

export const GradientGeneratorMainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${props => props.gradientValue};
`

export const GradientGeneratorContainer = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
`

export const Heading = styled.h1`
  font-size: 20px;
  color: white;
`

export const DirectionButtonHeading = styled.p`
  font-size: 17px;
  color: white;
`

export const DirectionButtonsContainer = styled.ul`
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
`

export const ColorPickDescription = styled.p`
  color: white;
  font-size: 15px;
`

export const ColorPickContainer = styled.div`
  display: flex;
`

export const InputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const ColorValue = styled.p`
  color: white;
  font-size: 15px;
`

export const CustomInput = styled.input`
  width: 100px;
  outline: none;
  height: 50px;
  cursor: pointer;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  border: 2px solid white;
`

export const GenerateButton = styled.button`
  padding: 8px 15px;
  margin: 5px;
  color: white;
  cursor: pointer;
  background-color: blue;
  border: none;
  border-radius: 6px;
  width: 100px;
`
