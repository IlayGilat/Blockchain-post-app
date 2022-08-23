
import { Network } from "alchemy-sdk"
export const alchemyConfig = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
}

export const customStyles = {
    content: {
      top: '30%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '',
      padding: 0,
      border: 'none',
    },
    overlay: {
      backgroundColor: '#334250a7',
    },
  }

