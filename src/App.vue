<template>
  <div id="app">
   
    
    <Navbar @search="search" />
    <div class="container">
      <div class="row">
        <div class="col-sm-9 m-t-10">
          <router-view></router-view>
          <!-- <Inventory @newItemAdded="addToCart" :items="items" /> -->
        </div>
        <div class="col-sm-3">
          <Cart @removeItem="removeItem"  :items="cart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import data from './data.js'

import VueRouter from 'vue-router'
import { routes } from './router/index'

const router = new VueRouter({
  routes
})

export default {
  components: {
    Navbar,
    Cart,
  },
  data() {
    return {
      items: [],
      cart: [
        { id: 1,title: 'Test',price: 20 }
      ]
    }
  },
  mounted() {
   this.items= data;
  },
  methods: {
    search(keyword){
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    },
    addToCart(item) {
      this.cart.push(item)
      console.log(item)
    },
    removeItem(index){
      this.cart.splice(index,1)
    }
  }

}
</script>

<style>
  .container {
    margin-top: 20px;
  }
</style>
