const API_URL = "https://fakestoreapi.com";

Vue.component('products', {
    template: `
            <div>
          <h1>{{data.title}}</h1>
          <img
            v-bind:src="data.image"
            style="max-width: 75px; max-height: 75px"/>
          <p>{{data.description}}</p>
          <i>{{data.price}}</i>
          <br />
          <button v-on:click="addtoCart(data)" v-if="status == 'Add'">{{status}} to Cart</button>
          <button v-on:click="addtoCart(data)" v-if="status == 'Added'">{{status}} {{count}} to Cart</button>
          
          <div style="border-bottom-style: solid; border-width: 1px"></div>
          </div>`
    ,
    data: function () {
        return {
            status: "Add",
            count: 0,
        }
    },

    props: {
        "data": Object,
        "cart": Array
    },
    methods: {
        addtoCart: function (item) {
            this.status = "Added";
            this.count += 1;
            this.cart.push(item);
            console.log(this.cart);
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
        currentPage: "Welcome",
        apiData: [],
        checkoutItems: [],
    },
    created: async function () {
        let response = await fetch(API_URL + "/products");
        let data = await response.json();
        this.apiData = data;
    },
    methods: {
        gotoStore: function () {
            this.currentPage = "Store";
        },

        gotoCheckout: function () {
            this.currentPage = "Checkout";
        },
        gotoHome: function () {
            this.currentPage = "Welcome";
        },
    }
});