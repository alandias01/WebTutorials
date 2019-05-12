import $ from 'jquery';
var Rx = require('rxjs/Rx');

const btn = $('#btn');
const input = $('#input');
const output1 = $('#output1'); const output2 = $('#output2'); const output3 = $('#output3'); const output4 = $('#output4'); const output5 = $('#output5');

//creation 'from' takes in an array or promise

//'from' Array
const numbers = [33, 44, 55, 66, 77];
const numbers$ = Rx.Observable.from(numbers);
numbers$.subscribe(
    v => { output1.append(v + "-"); }, err => { output1.append(err + "-"); }, complete => { output1.append("complete "); }  );

    output1.append("<ul id='posts'></ul>")

const posts = [ {title:'post1', body:'body1'}, {title:'post2', body:'body2'}, {title:'post3', body:'body3'},];
const posts$ = Rx.Observable.from(posts);
posts$.subscribe(
    v => {
        $('#posts').append("<li>" + v.title + "</li>")
    },
        err => { console.log(err); }, complete => { $('#posts').append("<li>complete</li>"); }
    );

const set = new Set(['Hello', 44, {title:'my title'}]);
Rx.Observable.from(set).subscribe(v => output1.append(v + '<br>'));

const map = new Map([[1,2], [3,4], [5,6]]);
Rx.Observable.from(map).subscribe(v => output1.append(v + '<br>'));

//'from' Promise
const myPromise = new Promise((rs, rj) => {
    setTimeout(() => {
        rs("Hello from promise");
    }, 1000);
});

myPromise.then(x => {
    output2.append(x);
});

//creation 'of' takes a sequence of variables
const sourceof = Rx.Observable.of(1,2,3,4,5).subscribe(v => output3.append(v + '-'));

//timer, 1st arg is one off, add 2nd arg for consistent interval
//const sourcetimer = Rx.Observable.timer(1000, 5000);
//sourcetimer.subscribe(val => output3.append(val));

//interval runs every n times.  Add take to limit the output so it doesn't run forever
//const sourceinterval = Rx.Observable.interval(1000).take(3);
//sourceinterval.subscribe(val => output3.append('I' + val));