import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
                <h1>Quote List</h1>
            </header>
        `;
    }
}

export default Header;