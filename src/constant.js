const HOST = (process.env.NODE_ENV === 'production') ?
    'pythonapi-dot-third-upgrade-315803.uw.r.appspot.com' :
    // 'intense-chamber-41417.herokuapp.com';
    // 'pythonapi-dot-third-upgrade-315803.uw.r.appspot.com';
    'localhost:8888';

export default Object.freeze({
    HOST: HOST,
});
