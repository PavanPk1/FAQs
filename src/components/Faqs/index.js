import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="web-browser">
      <div className="app-container">
        <h1 className="heading">FAQs</h1>
        <ul className="unorderedList">
          {faqsList.map(faq => (
            <FaqItem key={faq.id} oneFaqList={faq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
