async function fetchAndInstantiate() {
  const res = await fetch("add.wasm");
  const buffer = await res.arrayBuffer();
  const obj = await WebAssembly.instantiate(buffer)
  return obj;
}

fetchAndInstantiate().then(obj => {
  console.log(obj.instance.exports.add(1,2))
})
