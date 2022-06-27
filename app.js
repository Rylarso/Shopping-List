const API_URL = "https://fakestoreapi.com";

var app = new Vue({
    el: "#app",
    data: {
        currentPage: "Welcome",
        apiData: "",
        checkoutItems: [],
    },
    created: async function () {
        let response = await fetch(API_URL + "/products");
        let data = await response.json();
        console.log(data);
        this.apiData = data;
    },
    methods: {
        gotoStore: function () {
            this.currentPage = "Store";
            console.log(this.currentPage)
        },

        gotoCheckout: function () {
            this.currentPage = "Checkout";
            console.log(this.currentPage);
        },
        gotoHome: function () {
            this.currentPage = "Welcome";
            console.log(this.currentPage);
        },
    }
});