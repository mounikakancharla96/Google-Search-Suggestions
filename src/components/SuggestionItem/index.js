import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, getSuggestion} = props

  const {suggestion} = suggestionDetails

  const suggestionValue = () => {
    getSuggestion(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion-item">{suggestion}</p>
      <button
        type="button"
        className="suggestion-btn"
        onClick={suggestionValue}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
