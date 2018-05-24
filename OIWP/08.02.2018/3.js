//Используя встроенный модуль crypto, получите md5-хэш какой-либо строки. 
//Представьте решение в c9


let crypto = require("crypto-js");
crypto.MD5("test-string").toString();