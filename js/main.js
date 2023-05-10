import { strLenCheck } from './util.js';
import { createPostsList } from './data.js';
import { render } from './script.js';
import './validate.js';
import './form.js';

strLenCheck('Hello, World', 15);
const data = createPostsList(25);
render(data);
