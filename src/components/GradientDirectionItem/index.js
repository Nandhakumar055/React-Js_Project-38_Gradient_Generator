import {DirectionButtonItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {buttonDetails, onclickDirection, isActive} = props
  const {value, displayText} = buttonDetails

  const onClickButton = () => {
    onclickDirection(value)
  }

  return (
    <DirectionButtonItem>
      <DirectionButton
        type="button"
        onClick={onClickButton}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </DirectionButtonItem>
  )
}

export default GradientDirectionItem
