import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'Another To Do App';

        return /*html*/`
            <header>
                <h1>${title}</h1>
                <nav>
                    <a href="./">Home</a>
                    <a href="./todo.html">To Dos</a>
                </nav>
            </header>
        `;
    }
}

export default Header;