//just a simple usage example of useState, to show how it works and how to use it in a simple way
'use client'

import { useState } from 'react'

export default function Contador() {
  // 📦 uma caixinha guardando o número atual de biscoitos
  // biscouitos = quantos tem agora (começa com 0)
  // setBiscoitos = a função que TROCA o valor dentro da caixinha
  const [biscoitos, setBiscoitos] = useState(0)

  return (
    <div>
      <h1>Você tem {biscoitos} biscoitos 🍪</h1>

      {/* quando clica, pega o valor atual e soma 1 */}
      <button onClick={() => setBiscoitos(biscoitos + 1)}>
        Pegar biscoito +1
      </button>

      {/* quando clica, volta pra zero */}
      <button onClick={() => setBiscoitos(0)}>
        Vovó comeu tudo 😭
      </button>
    </div>
  )
}