const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:8082/',
        secure: false,
        loglevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;