<script>
    import cart from "$lib/store.js";
    import CartGrid from "$lib/components/cartGrid.svelte";
    import Checkout from "$lib/components/checkout.svelte";
    
    let total = 0;
    let prices = [];
    cart.subscribe((value) => {
      prices = value.map((item) => {return item.price;});
      total = prices.reduce(function(acc, val) { return acc + val; }, 0)
      console.log(prices);
    });


</script>

<CartGrid products={$cart}></CartGrid>
<Checkout {total}></Checkout>