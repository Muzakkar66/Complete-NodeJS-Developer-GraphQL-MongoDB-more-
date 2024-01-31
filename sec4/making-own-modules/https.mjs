
import {send} from './request.mjs'; 
import { read } from './response.mjs'

function request(url, data) {
    
    send(url, data);
    return read();
}
const final = request('https://google.com', 'hello this is the data')

console.log(final)