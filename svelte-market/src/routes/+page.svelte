<script>
  import cart from "../lib/store.js";
  import ProductGrid from "$lib/components/productGrid.svelte";
  let products = [
    {
      name: "Pasta",
      desc: "Pasta",
      img: "https://i5.walmartimages.com/seo/Barilla-Classic-Blue-Box-Pasta-Elbows-Penne-and-Spaghetti-6x16-oz_64aea97b-bb5c-4369-937e-e63b63161e2c.92fe589b44ae70079124e281948ecd68.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      price: 2.99, // Example price in dollars
    },
    {
      name: "Salsa di Pomodoro",
      desc: "Salsa di Pomodoro Classica",
      img: "https://tse2.mm.bing.net/th?id=OIP.9a292qUSZXxjsce1ivHywwHaE7&pid=Api&P=0&h=180",
      price: 3.49, // Example price in dollars
    },
    {
      name: "Olio d'Oliva",
      desc: "Olio Extra Vergine di Oliva",
      img: "https://www.abruzzonatural.it/www_abruzzonatural_it/files/cdn/054-trappeto-di-caprafico--olio-evo-dop_500.jpg",
      price: 9.99, // Example price in dollars
    },
    {
      name: "Formaggio Parmigiano",
      desc: "Formaggio Parmigiano Grattugiato",
      img: "https://tse3.mm.bing.net/th?id=OIP.XReTMVxXOhIkUgx5REh5ygAAAA&pid=Api&P=0&h=180",
      price: 7.99, // Example price in dollars
    },
  ];
  
  cart.subscribe((value) => {
    console.log(value);
  });
</script>

<ProductGrid {products}></ProductGrid>
