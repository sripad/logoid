# logoid

Import

```
import {Logoid, LogoidOption, BroadcastRestApiOption,
     BroadcastIndexedDbOption, LogLevel, HttpRequest} from 'logoid/dist';
```

Install Logoid
```
log = Logoid();

constructor(private http: HttpClient) {
    this.log.installBroadcasts({
        broadCastRestApi: {
            httpRequest: {
                url: 'http://localhost:4200/api',
                method: 'POST'
            },
            watch: [LogLevel.ERROR],
            httpBroadCast: (httpRequest: HttpRequest) => {
                this.http.post(httpRequest.url, httpRequest.payload).subscribe(
                (response) => {}
                );
            }
        },
        broadcastIndexedDb: {
            watch: [LogLevel.INFO, LogLevel.ERROR]
        }
    });
}

```   
Console Log  
```
this.log.info('welcome to logoid');
try{
    this.log.error('error message', new Error('custom error'));
} catch(e){
    //
}
```
