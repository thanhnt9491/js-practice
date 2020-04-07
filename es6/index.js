// Resparameter
// - Hàm chồng cho phép truyền nhiều tham số
// - Ngoài ra dùng để tùy số lượng tham số, sẽ xử lý logic khác nhau

function sum(...resParam1) {
  let sum = 0;
  for (let index = 0; index < resParam1.length; index++) {
    sum += resParam1[index];
  }

  console.log(sum);
  return sum;
}

sum(1, 2);
sum(1, 2, 3);


// Spread operator
// - Thêm phần tử vào mảng, thêm thuộc tính vào object
// - Copy tao ra mang moi
let arrayA = [1, 2, 3, 4]
let arrrayB = [...arrayA]

arrrayB.push(5, 6)
console.log(arrayA);
console.log(arrrayB);


// Default parameter
function sum(a = 1, b = 2) {
  console.log(a + b);
  return a + b;
};

sum();

// Filter: Tra ve mang
let products = [
  { MaSP: 1, TenSP: 'a' },
  { MaSP: 2, TenSP: 'b' },
  { MaSP: 3, TenSP: 'c' }
];

let filter = products.filter(a => a.TenSP === 'a');
console.log(filter);

// Find trả về 1 đối tượng, nếu có 2 cái giống nhau sẽ trả vè cái đầu tiên
let products2 = [
  { MaSP: 1, TenSP: 'a' },
  { MaSP: 2, TenSP: 'a' },
  { MaSP: 3, TenSP: 'c' }
];

let fill = products2.find(a => a.MaSP === 1);
console.log(fill);

// Map: Tương tự foreach, trả về mảng mới

let newProdcut = products.map((product, index) => {
  if (product.MaSP % 2 === 0) {
    return product
  }
  return 0;
})

console.log(newProdcut);

// Reduce: Tương tự foreach, tạo 1 một giá trị
let products3 = [
  { MaSP: 1, TenSP: 'a', Gia: 10 },
  { MaSP: 2, TenSP: 'a', Gia: 11 },
  { MaSP: 3, TenSP: 'c', Gia: 12 }
];

let sumMoney = products3.reduce((sum, product, index) => {

  return sum += product.Gia;

}, 0)

let newProduct3 = products3.reduce((array, product, index) => {

  if (product.TenSP === 'a') { array.push(product) }
  return array

}, [])

console.log(newProduct3);

// Reverse: Tra ve 1 mang dao nguoc
