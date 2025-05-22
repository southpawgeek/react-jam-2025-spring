import keywords from "../data/keywords"

const Keyword = ({ keyword }) => {
  const term = keywords[keyword] || {}
  return (
    <span
      className="keyword"
      data-keyword={term.description}
    >
      {term.name}
    </span>
  )
}

export default Keyword
