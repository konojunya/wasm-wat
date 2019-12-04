async function fetchAndInstantiate() {
  const res = await fetch("plusone.wasm");
  const buffer = await res.arrayBuffer();
  const obj = await WebAssembly.instantiate(buffer)
  return obj;
}

fetchAndInstantiate().then(obj => {
  // console.log(obj.instance.exports.add(1,2))
  console.log(obj.instance.exports.getAnswerPlus1())
})
