import { createPostsList } from './data.js';
import { render } from './script.js';
import './validate.js';
import './form.js';

const data = createPostsList(25);
render(data);
