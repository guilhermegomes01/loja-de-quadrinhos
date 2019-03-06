import {Md5} from 'ts-md5/dist/md5';

let md5 = new Md5();
const PUBLIC_KEY= "56e41ad6ea91ae4764d36624dfbf2298";
const PRIVATE_KEY = "2907731faf1c5beeb30b96c8d332e18fb018fe73";
var ts = new Date().getTime();
const URL = "https://gateway.marvel.com/v1/public/comics?";
var hash = md5.appendStr(ts + PRIVATE_KEY + PUBLIC_KEY).end();
// var keys = ``

export var fullUrl = `${URL}apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`;