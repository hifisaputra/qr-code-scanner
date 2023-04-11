import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect } from 'react'

const qrcodeRegionId = 'html5qr-code-full-region'

interface QrCodeScannerProps {
  onScan: (data: string) => void
  onError: (error: string) => void
}

const QrCodeScanner = (props: QrCodeScannerProps) => {
  useEffect(() => {
    // when component mounts
    const config = {
      fps: 10,
      qrbox: 250,
      aspectRatio: 1,
      disableFlip: true
    }

    if (!props.onScan) {
      throw 'qrCodeSuccessCallback is required callback.'
    }

    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      true
    )

    html5QrcodeScanner.render(props.onScan, props.onError)

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error('Failed to clear html5QrcodeScanner. ', error)
      })
    }
  }, [])

  return <div id={qrcodeRegionId} />
}

export default QrCodeScanner
