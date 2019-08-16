import Component from '../Component.js';
import Header from './Header.js';
import QuoteList from '../quotes/QuoteList.js';
import Search from '../options/Search.js';
import Paging from '../options/Paging.js';
import { getQuotes } from '../../services/quote-api.js';
import hashStorage from '../../services/hash-storage.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const search = new Search();
        optionsSection.appendChild(search.renderDOM());

        const listSection = dom.querySelector('.list-section');
        
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());
       
        const quoteList = new QuoteList({ quotes: [] });
        listSection.appendChild(quoteList.renderDOM());
        
        function loadQuotes() {
            const options = hashStorage.get();
            getQuotes(options)
                .then(data => {
                    const quotes = data.results;
                    const totalCount = data.count;

                    quoteList.update({ quotes: quotes });
                    paging.update({ 
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });
        }

        loadQuotes();

        window.addEventListener('hashchange', () => {
            loadQuotes();
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                
                <main>
                    <section class="options-section">
                        <!-- options go here -->
                    </section>
                        
                    <section class="list-section">
                        <!-- paging goes here -->
                        <!-- quote list goes here -->        
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;