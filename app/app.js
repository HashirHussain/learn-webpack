import { isEmail } from "validator";

import tripleMe from "./tripleMe";
console.log(isEmail("hashir@hashir.com"));
console.log(tripleMe(10));

document.querySelector("p").innerHTML = "test";

//instead of full page refresh, inject the changes content directly to the browser.cls
if (module.hot) {
  module.hot.accept();
}
