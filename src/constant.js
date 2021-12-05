const HOST = (process.env.NODE_ENV === 'production') ?
    'webappbackend-norahk2d5a-uw.a.run.app':
    // 'pythonapi-dot-third-upgrade-315803.uw.r.appspot.com' :
    // 'intense-chamber-41417.herokuapp.com';
    // 'pythonapi-dot-third-upgrade-315803.uw.r.appspot.com';
    // 'webappbackend-norahk2d5a-uw.a.run.app/';
    'localhost:8888';

export default Object.freeze({
    HOST: HOST,
});
