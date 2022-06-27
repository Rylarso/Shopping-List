const API_URL = "https://fakestoreapi.com";

var app = new Vue({
    el: "#app",
    data: {
        apiData: ""
    },
    created: async function () {
        let response = await fetch(API_URL + "/products");
        let data = await response.json();
        console.log(data);
        this.apiData = data;
    }
});