//const url = require('url')
const { URL, URLSearchParams } = require('url')
const myURL = new URL('https://example.org/?abc=123&bb=11')
console.log(myURL.searchParams.toString())