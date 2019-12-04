// add.wasm
// async function fetchAndInstantiate() {
//   const res = await fetch("add.wasm");
//   const buffer = await res.arrayBuffer();
//   const obj = await WebAssembly.instantiate(buffer)
//   return obj;
// }
//
// fetchAndInstantiate().then(obj => {
//   console.log(obj.instance.exports.add(1,2))
// })

// plusone.wasm
// async function fetchAndInstantiate() {
//   const res = await fetch("plusone.wasm");
//   const buffer = await res.arrayBuffer();
//   const obj = await WebAssembly.instantiate(buffer)
//   return obj;
// }
//
// fetchAndInstantiate().then(obj => {
//   console.log(obj.instance.exports.getAnswerPlus1())
// })

// logger.wasm
// async function fetchAndInstantiate() {
//   const res = await fetch("logger.wasm");
//   const buffer = await res.arrayBuffer();
//   const obj = await WebAssembly.instantiate(buffer, {
//     console: {
//       log: function(arg) {
//         console.log(arg)
//       }
//     }
//   })
//   return obj;
// }
//
// fetchAndInstantiate().then(obj => {
//   obj.instance.exports.logIt()
// })

// logger2.wasm
// const memory = new WebAssembly.Memory({initial: 1});
// function consoleLogString(offset, length) {
//   const bytes = new Uint8Array(memory.buffer, offset, length);
//   const string = new TextDecoder("utf8").decode(bytes);
//   console.log(string)
// }
// async function fetchAndInstantiate() {
//   const res = await fetch("logger2.wasm");
//   const buffer = await res.arrayBuffer();
//   const obj = await WebAssembly.instantiate(buffer, {
//     console: {
//       log: consoleLogString
//     },
//     js: {
//       mem: memory
//     }
//   })
//   return obj;
// }
//
// fetchAndInstantiate().then(obj => {
//   obj.instance.exports.writeHi()
// })

// table.wasm
async function fetchAndInstantiate() {
  const res = await fetch("table.wasm");
  const buffer = await res.arrayBuffer();
  const obj = await WebAssembly.instantiate(buffer)
  return obj;
}

fetchAndInstantiate().then(obj => {
  console.log(obj.instance.exports.callByIndex(0));
  console.log(obj.instance.exports.callByIndex(1));
  console.log(obj.instance.exports.callByIndex(2));
})
