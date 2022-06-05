var vm = new Vue({
    el: '#app',
    data: {
        title: 'hello world',
        url: 'https://www.youtube.com/watch?v=AHPkqa5ZaN0&list=PLv6GftO355AtDjStqeyXvhA1oRLuhvJWf&index=6'
    },
    methods: {
        say: function(text){
            return "hello " + text
        }
    },
    
})

console.log(vm)