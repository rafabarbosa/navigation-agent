import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const recognitionRef = useRef(null)
  const timeoutRef = useRef(null)

  const startListening = () => {
    // Verificar se o navegador suporta SpeechRecognition
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Seu navegador não suporta a API de Speech Recognition')
      return
    }

    // Criar instância do SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    recognitionRef.current = new SpeechRecognition()
    
    // Configurar o reconhecimento
    recognitionRef.current.continuous = true
    recognitionRef.current.interimResults = true
    recognitionRef.current.lang = 'pt-BR'

    let finalTranscript = ''

    recognitionRef.current.onstart = () => {
      setIsListening(true)
      setTranscript('')
      console.log('Microfone ativado...')
    }

    recognitionRef.current.onresult = (event) => {
      let interimTranscript = ''
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript
        if (event.results[i].isFinal) {
          finalTranscript += transcript
        } else {
          interimTranscript += transcript
        }
      }

      setTranscript(finalTranscript + interimTranscript)

      // Se há texto final, aguardar 2 segundos e fazer a requisição
      if (finalTranscript.trim()) {
        // Limpar timeout anterior se existir
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        // Aguardar 2 segundos após a pessoa parar de falar
        timeoutRef.current = setTimeout(() => {
          sendToBackend(finalTranscript.trim())
        }, 2000)
      }
    }

    recognitionRef.current.onerror = (event) => {
      console.error('Erro no reconhecimento de voz:', event.error)
      setIsListening(false)
      alert(`Erro no reconhecimento de voz: ${event.error}`)
    }

    recognitionRef.current.onend = () => {
      setIsListening(false)
      console.log('Microfone desativado')
    }

    // Iniciar o reconhecimento
    recognitionRef.current.start()
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const sendToBackend = async (text) => {
    try {
      console.log('Enviando texto para o backend:', text)
      
      const response = await axios.post('http://localhost:8000/navigate', {
        message: text
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log('Resposta do backend:', response.data)
      window.location.href = response.data.message
      // alert(`Resposta do servidor: ${JSON.stringify(response.data)}`)
      
    } catch (error) {
      console.error('Erro na requisição:', error)
      alert(`Erro na requisição: ${error.message}`)
    }
  }

  return (
    <div className="App">
      <h1>Agente de Navegação</h1>
      
      <div className="controls">
        {!isListening ? (
          <button 
            onClick={startListening}
            className="start-btn"
          >
            🎤 Iniciar Gravação
          </button>
        ) : (
          <button 
            onClick={stopListening}
            className="stop-btn"
          >
            ⏹️ Parar Gravação
          </button>
        )}
      </div>

      {isListening && (
        <div className="status">
          <p>🎤 Gravando... Fale agora!</p>
        </div>
      )}

      {transcript && (
        <div className="transcript">
          <h3>Texto Reconhecido:</h3>
          <p>{transcript}</p>
        </div>
      )}

      <div className="instructions">
        <h3>Como usar:</h3>
        <ol>
          <li>Clique no botão "Iniciar Gravação"</li>
          <li>Permita o acesso ao microfone quando solicitado</li>
          <li>Fale o que deseja</li>
          <li>Após 2 segundos de silêncio, a requisição será enviada automaticamente</li>
          <li>A resposta aparecerá em um alert</li>
        </ol>
      </div>
    </div>
  )
}

export default App
