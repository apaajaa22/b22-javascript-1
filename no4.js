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

const newName = ([data.name] = ["Rahadian Reza"])
const newEmail = ([data.email] = ["reza@email.com"])
const newHobby = ([...data.hoby] = ["makan", "main game", "ngoding"])

console.log(data)

const { street, city } = data.address
console.log(`alamat saya di jalan ${street} pada kota ${city}`)
