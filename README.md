# ⚛️ React 77 – useEffect z Dependency Array

## 🎯 Cilj
Razumeti, kako `useEffect` reagira na spremembe state-a.

## 🧠 Koncept
`useEffect(() => {}, [count])` se izvede:
- ob prvem renderju
- vsakič, ko se spremeni `count`

## 🧪 Funkcionalnost
- Gumba povečujeta in zmanjšujeta števec
- Ko `count` doseže 5, se prikaže sporočilo
- Effect se sproži SAMO ob spremembi `count`

## 🚀 Ključna lekcija
Dependency array določa **kdaj** se effect zažene — to je osnova za API klice, filtre in shranjevanje podatkov v pravih aplikacijah.

https://codesandbox.io/p/sandbox/qkkh2g?file=%2Fsrc%2FApp.js%3A1%2C1-30%2C1
