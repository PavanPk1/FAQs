import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {
    isHidden: true,
  }

  renderAnswer = () => {
    const {isHidden} = this.state
    const {oneFaqList} = this.props
    if (!isHidden) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="ans-text">{oneFaqList.answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggle = () => {
    this.setState(prevState => ({isHidden: !prevState.isHidden}))
  }

  render() {
    const {oneFaqList} = this.props
    const {isHidden} = this.state
    const ImageUrl = isHidden
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const imageAltText = isHidden ? 'plus' : 'minus'

    return (
      <li className="list-container">
        <div className="question-container">
          <h1 className="question">{oneFaqList.questionText}</h1>
          <button
            type="button"
            className="seeAnswerBtn"
            onClick={this.onToggle}
          >
            <img src={ImageUrl} alt={imageAltText} />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
