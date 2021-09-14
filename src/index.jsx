import { render } from "react-dom";
import App from './app.jsx'

const mountnode = document.querySelector(`#root`)

render(
    <App />,
    mountnode);
