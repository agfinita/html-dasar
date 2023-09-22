const imageUrls = [
            'https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg',

            'https://www.yourhomebasedmom.com/wp-content/uploads/2022/07/Blueberry-ice-cream-5.jpg',

            'https://celebratingsweets.com/wp-content/uploads/2023/04/Cookie-Dough-Ice-Cream-9.jpg',

            'https://img.kurio.network/1zweGvGcdxLQDXrJroMrvgdHqlA=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/20/11/07/9f4c10f9-d507-483d-a8c9-4f20db06f5f8.jpeg',

            'https://amandascookin.com/wp-content/uploads/2022/06/Rolled-Ice-Cream-RCSQ.jpg',

            'https://amandascookin.com/wp-content/uploads/2022/09/Birthday-Cake-Rolled-Ice-Cream-RCSQ.jpg',

            'https://veenaazmanov.com/wp-content/uploads/2017/07/Homemade-Chocolate-Ice-Cream-3.jpg',

            'https://www.milkmaid.in/sites/default/files/2020-07/Chocolate-Ice-Cream_0.jpg',

            'https://www.rainbownourishments.com/wp-content/uploads/2023/06/vegan-strawberry-mochi-ice-cream-1.jpg',

            'https://celebratingsweets.com/wp-content/uploads/2023/04/Cookie-Dough-Ice-Cream-9.jpg',

            'https://www.twopeasandtheirpod.com/wp-content/uploads/2021/07/banana-split-9-500x500.jpg',

            'https://media.self.com/photos/57d8bf324b76f0f832a0efdd/master/w_1600%2Cc_limit/banana-split-620.jpg',

];

let currentIndex = 0; 
        
function displayImage(index) {
    // membuat HTMLImageElement
    let productImage = new Image(150, 150);
    // memberi attribut src ke element gambar
    productImage.src = imageUrls[index];

    let imgProductElement = document.getElementById(`img-product-${index + 1}`);

    imgProductElement.innerHTML = '';

    // menambahkan gambar ke "img-product" section
    imgProductElement.appendChild(productImage);
}

for (let i = 0; i < imageUrls.length; i++) {
    displayImage(i);
}

        
setInterval(function() {
    displayImage(currentIndex);
        currentIndex = (currentIndex + 1) % imageUrls.length;
}, 3000);