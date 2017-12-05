import hello from './hello/index.js';

export default (app) => {
    app.use('/', hello)
}