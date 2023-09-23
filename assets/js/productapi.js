const productArray = [
    {
        // product 1
        image       : 'https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg',
        namaItem    : "Strawberry Ice",
        codeItem    : "ice1",
        priceItem   : 15,
    },
    {

        // product 2
        image       : 'https://www.yourhomebasedmom.com/wp-content/uploads/2022/07/Blueberry-ice-cream-5.jpg',
        namaItem    : "Bluberry Ice",
        codeItem    : "ice2",
        priceItem   : 15,
    },
    {
        // product 3
        image       : 'https://celebratingsweets.com/wp-content/uploads/2023/04/Cookie-Dough-Ice-Cream-9.jpg',
        namaItem    : "Strawberry Ice",
        codeItem    : "ice3",
        priceItem   : 20,
    },
    {
        // product 4
        image       : 'https://img.kurio.network/1zweGvGcdxLQDXrJroMrvgdHqlA=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/20/11/07/9f4c10f9-d507-483d-a8c9-4f20db06f5f8.jpeg',
        namaItem    : "Melon Ice",
        codeItem    : "ice4",
        priceItem   : 20,
    },
    {
        // product 5
        image       :  'https://amandascookin.com/wp-content/uploads/2022/06/Rolled-Ice-Cream-RCSQ.jpg',
        namaItem    : "Croffle Ice",
        codeItem    : "ice5",
        priceItem   : 18,
    },
    {
        // product 6
        image       : 'https://amandascookin.com/wp-content/uploads/2022/09/Birthday-Cake-Rolled-Ice-Cream-RCSQ.jpg',
        namaItem    : "Croffle Ice Sweet",
        codeItem    : "ice6",
        priceItem   : 21,
    },
    {
        // product 7
        image       : 'https://veenaazmanov.com/wp-content/uploads/2017/07/Homemade-Chocolate-Ice-Cream-3.jpg',
        namaItem    : "Chocolate Delux Ice",
        codeItem    : "ice7",
        priceItem   : 15,
    },
    {
        // product 8
        image       : 'https://www.milkmaid.in/sites/default/files/2020-07/Chocolate-Ice-Cream_0.jpg',
        namaItem    : "Choco Maniac Ice",
        codeItem    : "ice8",
        priceItem   : 25,
    },
    {
        // product 9
        image       : 'https://www.rainbownourishments.com/wp-content/uploads/2023/06/vegan-strawberry-mochi-ice-cream-1.jpg',
        namaItem    : "Mochi Strawberry",
        codeItem    : "ice9",
        priceItem   : 25,
    },
    {
        // product 10
        image       : 'https://celebratingsweets.com/wp-content/uploads/2023/04/Cookie-Dough-Ice-Cream-9.jpg',
        namaItem    : "Vanilla Cookies",
        codeItem    : "ice10",
        priceItem   : 28,
    },
    {
        // product 11
        image       : 'https://www.twopeasandtheirpod.com/wp-content/uploads/2021/07/banana-split-9-500x500.jpg',
        namaItem    : "Banana Split Cream",
        codeItem    : "ice11",
        priceItem   : 22,
    },
    {
        // product 12
        image       : 'https://media.self.com/photos/57d8bf324b76f0f832a0efdd/master/w_1600%2Cc_limit/banana-split-620.jpg',
        namaItem    : "Banana Split Regular",
        codeItem    : "ice12",
        priceItem   : 20,
    },
];

// membuat variabel untuk menempatkan data
const card = document.getElementById("sec-container-product");

// menyediakan variabel kosong untuk data keseluruhan
let item = " ";

// perulangan untuk menampilkan data
productArray.forEach((value) => {
    const productImage = new Image(150, 150);   // membuat elementHTMLImage
    productImage.src = value.image;             // attribute src gambar

    item += `
    <section>
        <div id="image-product"> ${productImage.outerHTML} </div>
        <h4 id="name-product"> ${value.namaItem} </h4>
        <p id="code-product"> ${value.codeItem} </p>
        <p id="price-product"> ${value.priceItem}</p>
        <a href="#"><small> selengkapnya </small></a>
        <button type="button" id="beli" name="beli-12" class="button-product"> Buy Now </button>
    </section>
    `;
});
card.innerHTML = item;

// array for get data from API
let loadProductStore = (() => {
    // request GET
    fetch ("https://fakestoreapi.com/products")     // API url
    .then((response) => {                           // menangkap promise
        return response.json();
    }).then((result) => {                           // menangkap promise hasil response
        // let output  = " ";   ternyata ini ngga dipake baru gambarnya bs jd satu section
        result.forEach((val) => {
            item += `
                <section>
                    <div id="image-product"> <img src=${val.image} width=150 height=150> </div>
                    <h4 id="name-product"> ${val.category} </h4>
                    <p id="code-product"> ${val.id} </p>
                    <p id="price-product"> ${val.price}</p>
                    <a href="#"><small> selengkapnya </small></a>
                    <button type="button" id="beli" name="beli-12" class="button-product"> Buy Now </button>
                </section>
            `
        });
        card.innerHTML  = item;
    }).catch((error) => {
        console.log(error);
    })
});

loadProductStore();