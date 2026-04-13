import { useState } from 'react'
import CryptoJS from 'crypto-js'
import './App.css'

function App() {
  const [texto, setText] = useState('')
  const [key, setKey] = useState('')
  const [textoCifrado, setCipher] = useState('')
  const [textoDescifrado, setDecipher] = useState('')

  const cifrar = (textoPlano, clave) => {
    const cipherText = CryptoJS.AES.encrypt(textoPlano, clave).toString()
    return cipherText
  }

  const descifrar = (textoEncriptado, clave) => {
    const bytes = CryptoJS.AES.decrypt(textoEncriptado, clave)
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
  }

  return (
    <main className="app-shell">
      <section className="crypto-card">
        <h1>Cifrador minimalista</h1>
        <p className="subtitle">Datos:</p>

        <div className="text">
          <label htmlFor="texto">Texto</label>
          <textarea
            id="texto"
            type="text"
            placeholder="Mensaje"
            value={texto}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="text">
          <label htmlFor="key">Clave</label>
          <input
            id="key"
            type="password"
            placeholder="Escribe tu clave"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>

        <div className="actions">
          <button className="btn primary"  onClick={ ()=> {setCipher(cifrar(texto, key));
                                                            setDecipher("");}}>
            Cifrar
          </button>
          <button className="btn" onClick={()=>{setDecipher(descifrar(textoCifrado, key))}}>
            Descifrar
          </button>
        </div>

        <div className="result-grid">
          <article className="result-panel">
            <h2>Texto cifrado</h2>
            <p>{textoCifrado || '...'}</p>
          </article>

          <article className="result-panel">
            <h2>Texto descifrado</h2>
            <p>{textoDescifrado || '...'}</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
