<script>
  // @ts-nocheck
  import cart from "../store.js";
  import removeItemFromArray from "$lib/removeItemFromArray.js";
  
  export let productName;
  export let productDescription;
  export let productImage;
  export let productPrice;
  export let buyButton;
  export let removeButton;

  function addToCart() {
    let tmpcart = $cart;
    tmpcart.push({
      name: productName,
      desc: productDescription,
      img: productImage,
      price: productPrice,
    });
    cart.set(tmpcart);
  }

  function removeFromCart() {
    let tmpcart = $cart;
    tmpcart = removeItemFromArray(tmpcart, {
      name: productName,
      desc: productDescription,
      img: productImage,
      price: productPrice,
    })
    cart.set(tmpcart);
    console.log("Cart: ")
    console.log($cart);
  }
</script>

<div class="card w-full max-w-11/12 bg-base-100 shadow-xl">
  <figure><img src={productImage} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{productName} - {productPrice}</h2>
    <p>{productDescription}</p>
    {#if buyButton}
      <div class="card-actions justify-end">
        <button on:click={addToCart} class="btn btn-primary"
          >Aggiungi al carrello</button
        >
      </div>
    {/if}
    {#if removeButton}
      <button on:click={removeFromCart} class="btn btn-square btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    {/if}
  </div>
</div>
