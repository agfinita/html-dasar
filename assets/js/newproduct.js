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

            <div class="card">
              <div class="card-body row">
                <img src=${val.image} style="width: 9rem;" class="col-2" alt="pict_product">
                <div class="col">
                    <br>
                    <h4 class="card-title col"><strong>${val.title}</strong></h4>
                    <p class="card-text col"> 
                        ID          : ${val.id}<br>
                        Category    : ${val.category}<br>
                        Price       : ${val.price}K<br>
                        Description : ${val.description}
                        <br><br>
                        <a href="#" class="btn btn-primary"> Buy Now</a>
                    </p>
                    
                </div>
              </div>
            </div> 
                    
            `
        });
        card.innerHTML  = item;
    }).catch((error) => {
        console.log(error);
    })
});

loadProductStore();