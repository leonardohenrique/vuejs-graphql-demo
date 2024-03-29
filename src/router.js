import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from './views/Books.vue'
import Book from './views/Book.vue'
import NewBook from './views/NewBook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    }, 
    {
      path: '/new-book',
      name: 'new-book',
      component: NewBook
    },     
    {
      path: '/book/:id',
      name: 'book',
      component: Book,
      props: true
    },       
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
