<script>
  export let total;
</script>

<div class="flex self-center text-center items-center w-full h-24 justify-center mt-6">
  <div class="w-1/2 rounded-lg shadow-lg py-2">
    <div class="w-full m-3 py-2 text-center text-2xl font-bold">{Math.round(total)} $</div>
    <button class="btn btn-outline btn-primary">Checkout</button>
  </div>
</div>
