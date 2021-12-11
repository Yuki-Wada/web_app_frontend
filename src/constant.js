const HOST = (process.env.NODE_ENV === 'production') ?
    'webappbackend-norahk2d5a-uw.a.run.app':
    // 'pythonapi-dot-third-upgrade-315803.uw.r.appspot.com' :

    'localhost:8888';
    // 'webappbackend-norahk2d5a-uw.a.run.app';
    // 'pythonapi-dot-third-upgrade-315803.uw.r.appspot.com';
    // 'intense-chamber-41417.herokuapp.com';

export default Object.freeze({
    HOST: HOST,
});
