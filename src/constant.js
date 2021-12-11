const HOST = (process.env.NODE_ENV === 'production') ?
    'webappbackend-norahk2d5a-uk.a.run.app':
    'localhost:8888';
    // 'webappbackend-norahk2d5a-uk.a.run.app';

export default Object.freeze({
    HOST: HOST,
});
