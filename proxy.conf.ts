const proxy = {
    '/api/*': {
        target: 'http://localhost:1995/',
        secure: false
    }
};

module.exports = proxy;
