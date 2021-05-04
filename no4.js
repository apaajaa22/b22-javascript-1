let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
}

const newData = {
  ...data,
  name: "rahadian reza r",
  email: "reza@emailcom",
  hobby: "main bola",
}

console.log(newData)

const { street, city } = newData.address
console.log(`alamat saya di jalan ${street} pada kota ${city}`)
