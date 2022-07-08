const productos = [
  {
    id: 1,
    name: "On The Road",
    author: "Jack Kerouac",
    price: 10,
    img:
      "https://imgs.search.brave.com/PG6VRGVRdd1tat50p4zbkf4eZejQVmLSXnyikv6sZfQ/rs:fit:346:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/eGVESlRoNnNFWDZk/VXhhcjJnTkNnSGFL/SiZwaWQ9QXBp",
  },
  {
    id: 2,
    name: "The Subterraneans",
    author: "Jack Kerouac",
    price: 20,
    img:
      "https://imgs.search.brave.com/xjuT1rKjFLtTvqpYLzm9WnQuJhjNsEYA_BjY0dc6DzY/rs:fit:169:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC56N0pWWExu/MlNRS2pnMFZJNU50/S1ZnQUFBQSZwaWQ9/QXBp",
  },
  {
    id: 3,
    name: "The Dharma Bums",
    author: "Jack Kerouac",
    price: 22,
    img:
      "https://imgs.search.brave.com/z18VKGHuzGbR8NKqeHitdlz1jLdJkAIJdFFNpiq3W-w/rs:fit:174:266:1/g:ce/aHR0cDovL2VjeC5p/bWFnZXMtYW1hem9u/LmNvbS9pbWFnZXMv/SS81MUJ4UmI4M2FI/TC5fU1kyNjRfQk8x/LDIwNCwyMDMsMjAw/X1FMNDBfLmpwZw",
  },

  {
    id: 4,
    name: "Junky",
    author: "William Burroghs ",
    price: 18,
    img:
      "https://imgs.search.brave.com/D2bD3wS_KSc2Gmt_vj7ptMfalnolARp_jqdJCdgpNAk/rs:fit:600:770:1/g:ce/aHR0cHM6Ly9pbWcu/ZGlzY29ncy5jb20v/NHlualBRbHd5R0Fr/Y3ZqRWpPVEFJZEs1/blgwPS9maXQtaW4v/NjAweDc3MC9maWx0/ZXJzOnN0cmlwX2lj/YygpOmZvcm1hdChq/cGVnKTptb2RlX3Jn/YigpOnF1YWxpdHko/OTApL2Rpc2NvZ3Mt/aW1hZ2VzL1ItMjYz/ODAzMS0xMjk0NDM2/NDcwLmpwZWcuanBn",
  },

  {
    id: 5,
    name: "Naked Lunch",
    author: "William Burroghs ",
    price: 20,
    img:
      "https://imgs.search.brave.com/53RKwp_6XkdBbQsMhwo5GmIx6afUjf2qIszchgbII-g/rs:fit:471:700:1/g:ce/aHR0cHM6Ly9yc3B1/bGwtc3VwZXJ2ZXJ0/Lm5ldGRuYS1zc2wu/Y29tL2ltYWdlcy9j/b3ZlcnMvbmFrZWRf/bHVuY2gvbmFrZWRf/bHVuY2gudWsuY2Fs/ZGVyLjE5NjQuanBn",
  },

  {
    id: 6,
    name: "Nova Express",
    author: "William Burroghs ",
    price: 13,
    img:
      "https://imgs.search.brave.com/C1aUiQuErxG0_mfx-JymphQ-1gvD3GZCzrpdQpClPyU/rs:fit:984:1200:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8tX3ZzMlg1eXJK/YlUvVXFEdXRQUGpk/NkkvQUFBQUFBQUFF/YWMvdnpKYWtQNVdj/XzAvczE2MDAvYnVy/cm91Z2hzLmpwZw",
  },

  {
    id: 7,
    name: "Howl and Other Poems",
    author: "Allen Ginsberg",
    price: 27,
    img:
      "https://imgs.search.brave.com/4ZM-DP4Ns_Pd5EH7JVL7-eSH9Mi98i1F3l1T-pt6k_M/rs:fit:154:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/d293cGQ3SUZyeW1S/OXozRjllMVJnQUFB/QSZwaWQ9QXBp",
  },

  {
    id: 8,
    name: "Indian Journals",
    author: "Allen Ginsberg",
    price: 27,
    img:
      "https://imgs.search.brave.com/4Y3BSHksszs7HykDBvOWmuxuVXXbwtRzzhPZICzex_Q/rs:fit:306:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/amNJZS1TOXdqQm9W/Vk4wUGREc05BSGFM/YyZwaWQ9QXBp",
  },
  {
    id: 9,
    name: "Iron Horse",
    author: "Allen Ginsberg",
    price: 18,
    img:
      "https://imgs.search.brave.com/5DlfTNtciOhs99vCzyA2EWHQ-uKcxtFI7J7c8CwTY-E/rs:fit:313:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/cXRfQnJOaktuaGho/bWNqX0Y1OXZRQUFB/QSZwaWQ9QXBp",
  },

  {
    id: 10,
    name: "Mind Breaths",
    author: "Allen Ginsberg",
    price: 23,
    img:
      "https://imgs.search.brave.com/eWCD9INh3PHYy8Y4KhtuPaE31BBureXJxEDh2OQtWag/rs:fit:353:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/SUJqajhabEtjQkdz/LXZVcmtjSEtRSGFK/NyZwaWQ9QXBp",
  },
];
