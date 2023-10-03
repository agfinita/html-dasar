// membuat variabel untuk menempatkan data
const card = document.getElementById("sec-container-product");

// menyediakan variabel kosong untuk data keseluruhan
let item = " ";

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
            <section class="card container-fluid">
                <section class="row g-0">
                    <picture class="col-md-2 p-3">
                        <img src=${val.image} class="img-fluid rounded-start" style="width: 10rem;" alt="pict_product">
                    </picture>

                    <section class="col-md-8">
                        <section class="card-body">
                            <h4 class="card-title"><strong>${val.title}</strong></h4>
                            <p class="card-text text-red">
                                ${val.price}K
                            </p>

                            <p class="card-text">
                                ${val.id} <br>
                                ${val.category} <br>
                                ${val.description}
                            </p>

                            <a href="#" class="btn btn-primary"> Buy Now</a>
                        </section>
                    </section>
                </section>
            </section>
            `
        });
        card.innerHTML  = item;
    }).catch((error) => {
        console.log(error);
    })
});

loadProductStore();