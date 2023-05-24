import './style.css'

function cljsbuild() {
	const s = document.createElement("script")
	s.setAttribute("src", "/testlib.js")
	document.head.appendChild(s)
	setTimeout(() => {
		console.log("LEIN CLJSBUILD:")
		console.log(testlib.core.compile("(+ 1 1)"))
	}, 1000)
}



cljsbuild()

import './lib/shadow/main.js'
console.log("SHADOW CLJS:")
console.log(testlib.core.compile("(+ 1 1)"))

document.querySelector('#app').innerHTML = `
  <div>
	Testing ShadowCLJS vs cljsbuild
  </div>
`

