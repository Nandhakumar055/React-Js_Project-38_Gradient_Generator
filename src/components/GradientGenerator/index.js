import {Component} from 'react'

import {
  GradientGeneratorMainContainer,
  GradientGeneratorContainer,
  Heading,
  DirectionButtonHeading,
  DirectionButtonsContainer,
  ColorPickDescription,
  ColorPickContainer,
  InputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    firstInputColor: '#00b5c2',
    secondInputColor: '#3906c6',
    gradientValue: `to ${gradientDirectionsList[0].value}, #00b5c2, #3906c6`,
  }

  onClickGenerateButton = () => {
    const {
      firstInputColor,
      secondInputColor,
      activeGradientDirection,
    } = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${firstInputColor}, ${secondInputColor}`,
    })
  }

  onChangeFirstInputColor = event => {
    this.setState({firstInputColor: event.target.value})
  }

  onChangeSecondInputColor = event => {
    this.setState({secondInputColor: event.target.value})
  }

  onclickDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  render() {
    const {
      firstInputColor,
      secondInputColor,
      gradientValue,
      activeGradientDirection,
    } = this.state
    console.log(gradientValue)

    return (
      <GradientGeneratorMainContainer
        data-testid="gradientGenerator"
        gradientValue={`linear-gradient(${gradientValue})`}
      >
        <GradientGeneratorContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionButtonHeading>Choose Direction</DirectionButtonHeading>
          <DirectionButtonsContainer>
            {gradientDirectionsList.map(eachButton => (
              <GradientDirectionItem
                key={eachButton.directionId}
                buttonDetails={eachButton}
                onclickDirection={this.onclickDirection}
                isActive={eachButton.value === activeGradientDirection}
              />
            ))}
          </DirectionButtonsContainer>
          <ColorPickDescription>Pick The Colors</ColorPickDescription>
          <ColorPickContainer>
            <InputAndColorContainer>
              <ColorValue>{firstInputColor}</ColorValue>
              <CustomInput
                onChange={this.onChangeFirstInputColor}
                value={firstInputColor}
                type="color"
              />
            </InputAndColorContainer>
            <InputAndColorContainer>
              <ColorValue>{secondInputColor}</ColorValue>
              <CustomInput
                onChange={this.onChangeSecondInputColor}
                value={secondInputColor}
                type="color"
              />
            </InputAndColorContainer>
          </ColorPickContainer>
          <GenerateButton onClick={this.onClickGenerateButton}>
            Generate
          </GenerateButton>
        </GradientGeneratorContainer>
      </GradientGeneratorMainContainer>
    )
  }
}

export default GradientGenerator
