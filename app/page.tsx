"use client"
import {useState} from "react"

export default function Home() {
  const [wallet, setwallet] = useState(null)
  const connectWallet = async () => {
    const {solana} = window as any;
    setwallet((await solana.connect()).publicKey.toString())
  }

  return (
    <main>
      <div className="h-screen flex ">
      <div className="bg-slate-900 w-full h-20 flex items-center justify-between p-10">
       <h1>My DAPPPPPPPPPPPP</h1>
       <button className="bg-slate-500 p-3 rounded" onClick={connectWallet}>{wallet ? wallet : " Connect Wallet" }</button>

      </div>
       
      </div>
    </main>
  )
}