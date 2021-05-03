let printSegitiga = 5

let result = ""
if (typeof printSegitiga === "number") {
  for (let i = printSegitiga; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      result += j + " "
    }
    console.log(result)
    result = ""
  }
} else {
  console.log("data harus number")
}
