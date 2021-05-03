const bhsIndo = 100
const bhsInggris = 100
const mtk = 100
const ipa = 100

const ratarata = (bhsIndo + bhsInggris + mtk + ipa) / 4
console.log(ratarata)

if (ratarata <= 59) {
  console.log(`Rata-rata = ${ratarata}`)
  console.log("grade = E")
} else if (ratarata <= 69) {
  console.log(`Rata-rata = ${ratarata}`)
  console.log("grade = D")
} else if (ratarata <= 79) {
  console.log(`Rata-rata = ${ratarata}`)
  console.log("grade = C")
} else if (ratarata <= 89) {
  console.log(`Rata-rata = ${ratarata}`)
  console.log("grade = B")
} else if (ratarata <= 100) {
  console.log(`Rata-rata = ${ratarata}`)
  console.log("grade = A")
} else {
  console.log("Input nilai ada yg salah")
}
