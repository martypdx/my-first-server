import Component from '../Component.js';

class QuoteItem extends Component {
    renderHTML() {
        const quote = this.props.quote;

        return /*html*/`
            <li class="quote-item">
                <h2>
                    <img src="${quote.image}">
                    <span>${quote.character}</span>
                </h2>
                
                <quote>
                    ${quote.quote}
                </quote>

            </li>
        `;
    }
}

export default QuoteItem;