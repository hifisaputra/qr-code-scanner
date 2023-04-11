import { useState } from 'react'
import './App.css'
import QrCodeScanner from './QrCodeScanner'

function App() {
  const [qrCode, setQrCode] = useState('')

  const qrCodeSuccessCallback = (data: string) => {
    console.log('QR code scanned. ', data)
    setQrCode(data)
  }

  const qrCodeErrorCallback = (error: string) => {
    console.error('Failed to scan QR code. ', error)
  }

  return (
    <div className="App">
      <QrCodeScanner
        onScan={qrCodeSuccessCallback}
        onError={qrCodeErrorCallback}
      />
    </div>
  )
}

export default App
