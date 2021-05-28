import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';

import { Subject } from 'rxjs';

// var observable = Observable.create((observer: any) => {
//     try{
//         observer.next('hey')
//         observer.next('how r u')
//         setInterval(() =>{
//             observer.next('i am good');
//         }, 2000)
//         // observer.complete()
//         // observer.next('not')
//     } catch(error){
//         observer.error(error);
//     }
// });

// var observer =  observable.subscribe(
//     (x:any) => addItem(x), 
//     (error:any) => addItem(error),
//     () => addItem('Complete') 
// );

// setTimeout(()=>{
//     observer.unsubscribe();
// }, 6001)


// var observable = fromEvent(document ,'mousemove')
// setTimeout(() => {
//     var subsciption = observable.subscribe((x:any) => addItem(x))
// }, 2000);


var subject = new Subject();
subject.subscribe(
    data => addItem('observer 1'+data),
    err => addItem(err),
    () => addItem('observer 1 completed')
)

subject.next('this first thing has beed sent');

var observer2 = subject.subscribe(
    data => addItem('observer 2' + data)
)

subject.next('second thing has been send')
subject.next('third thing has been send')

observer2.unsubscribe();
subject.next('final thing has been send')


function addItem(val: any){
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}