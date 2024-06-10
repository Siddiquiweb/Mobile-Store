const products = {
    Apple: {
        Iphone6: {
            name: "Iphone 6",
            type: "Mobile",
            color: "Black",
            ram: "1gb",
            rom: "64gb",
            camera: "12+2MP",
            batteryTime: "1,810mAh",
            display: "4.7 inches",
            profilePicture: "./imges/iphone 6.jpg",
            price: "43,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Iphone8: {
            name: "Iphone 8",
            type: "Mobile",
            color: "Gold",
            ram: "2gb",
            rom: "256gb",
            camera: "13+2+2MP",
            batteryTime: "1821mAh",
            display: "4.7 inches",
            profilePicture: "./imges/iphone 8.jpg",
            price: "108,610",
            pta: true,
            avalaible: true,
            cart: false,
        },
        iphoneX: {
            name: "Iphone X",
            type: "Mobile",
            color: "White",
            ram: "3gb",
            rom: "256gb",
            camera: "8MP",
            batteryTime: "2716mAh",
            display: "5.8 inches",
            profilePicture: "./imges/iphone X.jpg",
            price: "144,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Iphone11: {
            name: "Iphone 11",
            type: "Mobile",
            color: "Gray",
            ram: "4gb",
            rom: "256gb",
            camera: "8MP",
            batteryTime: "3110mAh",
            display: "5.8 inches",
            profilePicture: "./imges/iphone 11.jpg",
            price: "178,000",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Iphone12: {
            name: "Iphone 12",
            type: "Mobile",
            color: "Gray",
            ram: "4gb",
            rom: "256gb",
            camera: "13MP",
            batteryTime: "2815mAh",
            display: "6.1 inches",
            profilePicture: "./imges/iphone 12.jpg",
            price: "179,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Iphone14: {
            name: "Iphone 14",
            type: "Mobile",
            color: "Black",
            ram: "6gb",
            rom: "256gb",
            camera: "5MP",
            batteryTime: "3279mAh",
            display: "6.1 inches",
            profilePicture: "./imges/iphone 14.jpg",
            price: "179,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
    },
    Samsung: {
        galaxy_S21: {
            name: "Galaxy S21",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "128gb",
            camera: "13MP",
            batteryTime: "4000mAh",
            display: "6.2 inches",
            profilePicture: "./imges/Galaxy S21.jpg",
            price: "176,499",
            pta: true,
            avalaible: true,
            cart: false,
        },
        galaxy_A35: {
            name: "Galaxy A35",
            type: "Mobile",
            color: "Aqua",
            ram: "8gb",
            rom: "256gb",
            camera: "48+8+2+2MP",
            batteryTime: "5000mAh",
            display: "6.6 inches",
            profilePicture: "./imges/Galaxy A35.jpg",
            price: "114,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        galaxy_A06: {
            name: "Galaxy A06",
            type: "Mobile",
            color: "Green",
            ram: "6gb",
            rom: "128gb",
            camera: "16MP",
            batteryTime: "5000mAh",
            display: "6.7 inches",
            profilePicture: "./imges/Galaxy S21.jpg",
            price: "36,499",
            pta: true,
            avalaible: true,
            cart: false,
        },
    },
    Infinix: {
        hot_40_pro: {
            name: "Hot 40 Pro",
            type: "Mobile",
            color: "Black",
            ram: "4gb",
            rom: "256gb",
            camera: "48+8+5+2MP",
            batteryTime: "5000mAh",
            display: "6.78 inches",
            profilePicture: "./imges/Hot 40 Pro.jpg",
            price: "45,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        note_40: {
            name: "Note 40",
            type: "Mobile",
            color: "Green",
            ram: "8gb",
            rom: "256gb",
            camera: "20MP",
            batteryTime: "2815mAh",
            display: "6.78 inches",
            profilePicture: "../imges/Note 40.jpg",
            price: "54,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        hot_30: {
            name: "Hot 30",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "128gb",
            camera: "16MP",
            batteryTime: "5000mAh",
            display: "6.78 inches",
            profilePicture: "./imges/Hot 30.jpg",
            price: "34,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
    },
    Tecno: {
        pova_06_pro: {
            name: "Pova 06 Pro",
            type: "Mobile",
            color: "Silver",
            ram: "6gb",
            rom: "128gb",
            camera: "16MP",
            batteryTime: "6000mAh",
            display: "6.78 inches",
            profilePicture: "./imges/Pova 06 Pro.jpg",
            price: "24,799",
            pta: true,
            avalaible: true,
            cart: false,
        },
        spark_20: {
            name: "Spark 20",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "256gb",
            camera: "15MP",
            batteryTime: "5000mAh",
            display: "6.6 inches",
            profilePicture: "./imges/Spark 20.jpg",
            price: "31,799",
            pta: true,
            avalaible: true,
            cart: false,
        },
        camon_20: {
            name: "Camon 20",
            type: "Mobile",
            color: "Serenity Blue",
            ram: "4gb",
            rom: "256gb",
            camera: "6MP",
            batteryTime: "5000mAh",
            display: "6.67 inches",
            profilePicture: "./imges/Camon 20.jpg",
            price: "41,499",
            pta: true,
            avalaible: true,
            cart: false,
        },


    },

    Redmi: {
        Redmi8A: {
            name: "redmi8A",
            type: "Mobile",
            color: "Black",
            ram: "2GB",
            rom: "32GB",
            camera: "16MP",
            batteryTime: "5000",
            display: "6.22'",
            profilePicture: "./imges/iphone 6.jpg",
            price: "15899",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Redmi8: {
            name: "Redmi 8",
            type: "Mobile",
            color: "Pink",
            ram: "64GB",
            rom: "256gb",
            camera: "10MP",
            batteryTime: "1821mAh",
            display: "6.22' inches",
            profilePicture: "./imges/iphone 8.jpg",
            price: "22499",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Redmi9C: {
            name: "Redmi 9C",
            type: "Mobile",
            color: "Dark Blue",
            ram: "3gb",
            rom: "256gb",
            camera: "20MP",
            batteryTime: "2716mAh",
            display: "5.8 inches",
            profilePicture: "https://images.priceoye.pk/xiaomi-redmi-9c-pakistan-priceoye-uhw37-500x500.webp",
            price: "144,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Redmi9: {
            name: "Redmi 9",
            type: "Mobile",
            color: "Solid Blue",
            ram: "4gb",
            rom: "256gb",
            camera: "16MP",
            batteryTime: "3110mAh",
            display: "5.8 inches",
            profilePicture: "https://cdn.techjuice.pk/wp-content/uploads/2021/02/Capture-1-462x596.png",
            price: "178,000",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Redmi9A: {
            name: "Redmi 9A",
            type: "Mobile",
            color: "Gray",
            ram: "4gb",
            rom: "256gb",
            camera: "13MP",
            batteryTime: "2815mAh",
            display: "6.1 inches",
            profilePicture: "https://compughana.com/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/m/i/mi_9a_2.jpg",
            price: "179,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        RedmiNote9: {
            name: "Redmi Note 9",
            type: "Mobile",
            color: "Gray",
            ram: "6gb",
            rom: "256gb",
            camera: "10",
            batteryTime: "3279mAh",
            display: "6.1 inches",
            profilePicture: "https://www.symbios.pk/image/cache/data/x/Xiaomi-Redmi-Note-9-Pro-Max-500x500.jpg",
            price: "179,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Redmi9C: {
            name: "Redmi 9C",
            type: "Mobile",
            color: "Dark Blue",
            ram: "3gb",
            rom: "256gb",
            camera: "20MP",
            batteryTime: "2716mAh",
            display: "5.8 inches",
            profilePicture: "https://images.priceoye.pk/xiaomi-redmi-9c-pakistan-priceoye-uhw37-500x500.webp",
            price: "144,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Redmi9: {
            name: "Redmi 9",
            type: "Mobile",
            color: "Solid Blue",
            ram: "4gb",
            rom: "256gb",
            camera: "16MP",
            batteryTime: "3110mAh",
            display: "5.8 inches",
            profilePicture: "https://cdn.techjuice.pk/wp-content/uploads/2021/02/Capture-1-462x596.png",
            price: "178,000",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Redmi9A: {
            name: "Redmi 9A",
            type: "Mobile",
            color: "Gray",
            ram: "4gb",
            rom: "256gb",
            camera: "13MP",
            batteryTime: "2815mAh",
            display: "6.1 inches",
            profilePicture: "https://compughana.com/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/m/i/mi_9a_2.jpg",
            price: "179,999",
            pta: true,
            avalaible: true,
            cart: false,
        },


    },
    Lenovo: {
        Lenovo: {
            name: "Intel Celeron",
            type: "laptop",
            color: "Gray",
            ram: "6gb",
            rom: "256gb",
            camera: "10",
            batteryTime: "3279mAh",
            display: "6.1 inches",
            profilePicture: "https://static3.webx.pk/files/19643/Images/lenovo-ideapad-1-15igl7-laptop-price-in-pakistan-4-19643-0-100124115926957.jpg",
            price: "179,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        ThinkPad: {
            name: "ThinkPad",
            type: "laptop",
            color: "Gray",
            ram: "6gb",
            rom: "256gb",
            camera: "10",
            batteryTime: "3279mAh",
            display: "6.1 inches",
            profilePicture: "https://www.paklap.pk/media/catalog/product/cache/aa00bc85d0f554bb56f3e16e55e21cbc/l/e/lenovo-laptops-ideapad-slim-3-gen8-15-amd-gallery-4.jpg.webp",
            price: "179,999",
            pta: true,
            avalaible: true,
            cart: false,
        },
        Lenovotouch: {
            name: "lenovotouch",
            type: "laptop",
            color: "Gray",
            ram: "6gb",
            rom: "256gb",
            camera: "10",
            batteryTime: "3279mAh",
            display: "6.1 inches",
            profilePicture: "https://www.paklap.pk/media/catalog/product/cache/aa00bc85d0f554bb56f3e16e55e21cbc/8/2/82x7004bps_prices_in_pakistan.jpg.webp",
            price: "179,999",
            pta: true,
            avalaible: true,
            cart: false,
        },

    },
};


const companySelect = document.getElementById("company");
const modelSelect = document.getElementById("model");
const list = document.getElementById("list");

for (let company in products) {
    let option = `
          <option value="${company}">${company}</option>
      `;
    companySelect.innerHTML += option;
}

for (let company in products) {
    for (let model in products[company]) {
        const mobile = products[company][model];
        let card = `<div class="card" style="width: 18rem;">
      <img src="${mobile.profilePicture}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${mobile.name}</h5>
        <p class="card-text">Price: ${mobile.price}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">storage: ${mobile.ram} / ${mobile.rom}</li>
        <li class="list-group-item">color: ${mobile.color}</li>
        <li class="list-group-item">display: ${mobile.display}</li>
        <li class="list-group-item">Battery: ${mobile.batteryTime}</li>
        <li class="list-group-item">Camera: ${mobile.camera}</li>
      </ul>
    </div>`;
        list.innerHTML += card;
    }
}

function handleSelectCompany() {
    modelSelect.innerHTML = "";
    const company = companySelect.value;
    for (let model in products[company]) {
        let option = `
              <option value="${model}">${model}</option>
          `;
        modelSelect.innerHTML += option;
    }
}

function search() {
    const company = companySelect.value;
    const model = modelSelect.value;

    //TODO: add input validation

    const mobile = products[company][model];
    let card = `<div class="card" style="width: 18rem;">
      <img src="${mobile.profilePicture}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${mobile.name}</h5>
        <p class="card-text">Price: ${mobile.price}</p>
         
      </div>
      
      <ul class="list-group list-group-flush">
        <li class="list-group-item">storage: ${mobile.ram} / ${mobile.rom}</li>
        <li class="list-group-item">color: ${mobile.color}</li>
        <li class="list-group-item">display: ${mobile.display}</li>
         <li class="list-group-item">Battery: ${mobile.batteryTime}</li>
         <li class="list-group-item">Camera: ${mobile.camera}</li>
      </ul>
    </div>`;

    list.innerHTML = card;
}