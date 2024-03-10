<script>
  import cart from "../lib/store.js";
  import ProductGrid from "$lib/components/productGrid.svelte";
  import { onMount } from "svelte";

  let products = [];
  // @ts-ignore
  onMount(async () => {
    let res = await fetch(
      "https://5173-matteturtle-sveltemarke-nyyzt27vvha.ws-eu108.gitpod.io/api/getProducts"
    );
    products = await res.json();
  });
  cart.subscribe((value) => {
    console.log(value);
  });
</script>

<ProductGrid {products}></ProductGrid>
