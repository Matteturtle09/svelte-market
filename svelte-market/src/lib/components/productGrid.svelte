<script>
// @ts-nocheck

    import ProductCard from "./productCard.svelte";
    export let products;
</script>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-4 mt-3">
    {#each products as p}
        <ProductCard productName={p.name} productDescription={p.desc} productImage={p.img} productPrice={p.price} buyButton={true} removeButton={false}/>
    {/each}
</div>