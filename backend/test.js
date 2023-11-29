

const productName = [
    'Air Force 1', 'Superstar', 'Chuck Taylor All Star', 'Old Skool', 'Suede Classic',
    '574', 'Classic Leather', '6-Inch Premium Boots', '1460', 'Ace Sneakers',
    'Triple S', 'Boost 350', 'Jordan 1', 'Pigalle', 'Alpargata', 'Arizona',
    'Classic Clogs', 'Authentic Original Boat Shoe', 'Bondi', 'Speedcross'
  ];
  
  const companyName = [
    "Nike", "Adidas", "Puma", "Reebok", "New Balance",
    "Converse", "Under Armour", "Vans", "Skechers", "ASICS"
  ];
  
  const category = ["Men", "Women", "Unisex"];
  
  const colors = [
    'Red', 'Blue', 'Green', 'Yellow', 'Orange',
    'Purple', 'Pink', 'Black', 'White', 'Brown'
  ];
  const image =[
    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcREPvqi_KbVT3LAiwz5JTNl7evzONw_pb4-xqYC42WY_h4FQuKt0hGalK1FLIPN5lV39Lkv0N7h&usqp=CAc',
    'https://contents.mediadecathlon.com/p2393904/c090fa6d9198b67c3ca55a5ba079aeff/p2393904.jpg',
    'https://www.barkershoes.com/cdn/shop/files/barker-shoes-bladen-brogue-1_ab07c377-221c-46e1-a04b-909ed4c2c16d_1800x1200_crop_center.png?v=1680602760',
    'https://hips.hearstapps.com/hmg-prod/images/index-shoes-1661358805.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    'https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOSKECHERS-SPOSHOE749803D11EB7D/1563405628414_0..jpg',
    'https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLO1625/8-445x618.jpg',
    'https://www.ascotshoes.co.uk/cdn/shop/t/4/assets/slide_2.jpg?v=175445062721631031861657271761',
    'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B787.020_1.jpg',
    'https://i02.appmifile.com/489_operator_in/01/09/2022/beedf3efc8569c6ba25840a5b2a6dbe0!800x800!85.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d455e5b6-23e9-4f06-8b86-32610d838937/renew-run-3-road-running-shoes-395S7c.png',
    'https://i.guim.co.uk/img/media/b48037b5f51bbaa96617d75715faadda1fd8af72/0_65_2018_1210/master/2018.jpg?width=1200&quality=85&auto=format&fit=max&s=5e6d95aa2d3711df31601d8c31e2884c',
    'https://cld.accentuate.io/5353320710301/1663094662150/Madrid_Heathered-Grey_Feature-Float-1380.png?v=1669223444554&options=w1000',
    'https://www.barkershoes.com/cdn/shop/files/women_880x550_crop_center.jpg?v=1694509706',
    'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/1/8/p/-original-imaghvb7kkpy73vn.jpeg?q=90&crop=false',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjThmg4OhtrLhYgj-CAZ3qxBWBI4pXRdRDZw&usqp=CAU',
    'https://www.wildling.shoes/cdn/shop/files/wildling-shoes-TANN-family-mobil.jpg?v=1697543060&width=720',
    'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23128006/2023/10/19/ebba55bd-e29d-4eb4-9897-f531aae5f7e11697690244669-ADIDAS-Originals-Unisex-Casual-Shoes-1291697690244351-1.jpg',
    'https://contents.mediadecathlon.com/p2393904/c090fa6d9198b67c3ca55a5ba079aeff/p2393904.jpg',
    'https://images.lululemon.com/is/image/lululemon/LW9EPYS_061712_1',
    'https://images.immediate.co.uk/production/volatile/sites/21/2021/09/20210702_SB_5DMKII_MG_7001-8af6335.jpg?quality=90&resize=768%2C574',
    'https://row.barkershoes.com/cdn/shop/collections/c9de6e9bd9195ba8b4ce02dcc7138b6a_600x375_crop_center.jpg?v=1632492625',
    'https://www.ascotshoes.co.uk/cdn/shop/t/4/assets/slide_3.jpg?v=161076119011452656771613821793',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a1fe08cd-1fc4-441e-8a3f-76aebe6fe52b/air-jordan-1-low-shoes-6Q1tFM.png'


  ]
  let productList = [];
  
  for (let i = 0; i < productName.length; i++) {
    let colorIndex1 = Math.floor(Math.random() * colors.length);
    let colorIndex2 = colorIndex1;
    while (colorIndex2 === colorIndex1) {
      colorIndex2 = Math.floor(Math.random() * colors.length);
    }
  
    let shoeObj = {
      productName: companyName[Math.floor(Math.random() * companyName.length)] + " " + productName[i],
      companyName: companyName[Math.floor(Math.random() * companyName.length)],
      rating: (Math.random() * 4 + 1).toFixed(1),
      category: category[Math.floor(Math.random() * category.length)],
      color: colors[colorIndex1] + "/" + colors[colorIndex2],
      price: Math.floor(Math.random() * 500 + 1 ),
      image: [
        image[i + 1] , image[i + 2] , image[i + 3]
      ]
    };
  
    productList.push(shoeObj);
  }
  
  console.log(productList);
  


  console.log(image.length)

  let newList = productList

  module.exports = newList
