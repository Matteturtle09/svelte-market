<script>
  import { onMount } from "svelte";

  let products = [];
  // @ts-ignore
  onMount(async () => {
    let res = await fetch("/api/getProducts");
    products = await res.json();
  });

  let newProduct = { name: "", desc: "", price: "", img: "" };
</script>

<div class="m-3 overflow-x-auto">
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th class="px-24">Nome</th>
        <th class="px-64">Desc</th>
        <th class="px-16">Prezzo</th>
        <th class="px-8">Img</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each products as p}
        <tr>
          <td class="sm: text-sm"
            ><input
              type="text"
              placeholder="nome"
              class="input input-ghost w-full"
              bind:value={p.name}
            /></td
          >
          <td class="sm: text-sm"
            ><input
              type="text"
              placeholder="descrizione"
              class="input input-ghost w-full"
              bind:value={p.desc}
            /></td
          >
          <td
            ><input
              type="number"
              placeholder="prezzo"
              class="input input-ghost w-full"
              bind:value={p.price}
            /></td
          >
          <td
            class="sm: text-sm"
            on:click={() => {
              let imgUrl = prompt("Nuovo URL Immagine", "");
              if (imgUrl != null && imgUrl != "") {
                p.img = imgUrl;
              }
            }}
          >
            <div class="w-10 rounded-xl">
              <img class="rounded-lg" src={p.img} />
            </div>
          </td>

          <td
            ><button
              class="btn btn-primary sm:font-sm"
              on:click={async () => {
                await fetch("/api/editProduct", {
                  method: "post",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  //make sure to serialize your JSON body
                  body: JSON.stringify(p),
                });
                let res = await fetch("/api/getProducts");
                products = await res.json();
              }}>Salva</button
            ></td
          >
        </tr>
      {/each}
      <tr>
        <td class=""
          ><input
            type="text"
            placeholder="nome"
            class="input input-ghost w-full"
            bind:value={newProduct.name}
          />
        </td>
        <td class=""
          ><input
            type="text"
            placeholder="descrizione"
            class="input input-ghost w-full"
            bind:value={newProduct.desc}
          /></td
        >
        <td
          ><input
            type="text"
            placeholder="prezzo"
            class="input input-ghost w-full"
            bind:value={newProduct.price}
          /></td
        >
        <td
          ><input
            type="text"
            placeholder="url immagine"
            class="input input-ghost w-full"
            bind:value={newProduct.img}
          /></td
        >
        <td
          ><button
            class="btn btn-primary sm:font-sm"
            on:click={async () => {
              await fetch("/api/addProduct", {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },

                //make sure to serialize your JSON body
                body: JSON.stringify(newProduct),
              });
              let res = await fetch("/api/getProducts");
              products = await res.json();
            }}>Aggiungi</button
          ></td
        >
      </tr>
    </tbody>
  </table>
</div>
