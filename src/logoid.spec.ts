import {Logoid, LogoidOption, BroadcastRestApiOption,
     BroadcastIndexedDbOption, LogLevel, HttpRequest} from './index';


test('basic test', () => {
    const log = new Logoid();
    log.installBroadcasts({
        broadCastRestApi: {
            httpRequest: {
                url: 'http://localhost:4200/api',
                method: 'POST'
            },
            watch: [LogLevel.ERROR]
        },
        broadcastIndexedDb: {
            watch: [LogLevel.INFO, LogLevel.ERROR]
        }
    })
    log.log('welcome to logoid');
    try{
        log.error('error message', new Error('custom error'));
    // tslint:disable-next-line: no-empty
    } catch(e){
        //
    }
    
});