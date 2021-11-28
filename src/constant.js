const host = (process.env.NODE_ENV === 'production') ?
    'pythonapi-dot-third-upgrade-315803.uw.r.appspot.com' :
    'pythonapi-dot-third-upgrade-315803.uw.r.appspot.com';
    // 'localhost:8888';

    export default {
    data: function () {
        return {
            host,
        }
    }
}
