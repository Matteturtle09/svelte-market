<script>
  import cart from "../lib/store.js";
  import ProductGrid from "$lib/components/productGrid.svelte";
  import { onMount } from "svelte";

  let products = [];
  // @ts-ignore
  onMount(async () => {
    let res = await fetch(
      "/api/getProducts"
    );
    products = await res.json();
  });
  cart.subscribe((value) => {
    console.log(value);
  });
</script>

<ProductGrid {products}></ProductGrid>
