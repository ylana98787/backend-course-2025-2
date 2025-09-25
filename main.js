const { URL, URLSearchParams } = require('url');
const date = "20231001";       
const time_period = "quarter"; 
const baseUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/bankfin");
baseUrl.search = new URLSearchParams({
    date: date,
    period: time_period,
    json: "" 
});
console.log(baseUrl.toString());
