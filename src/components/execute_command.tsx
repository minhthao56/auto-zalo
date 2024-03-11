'use client'
import React from 'react'
import { invoke } from '@tauri-apps/api/tauri'


export default function ExecuteCommand() {
  return (
    <button onClick={async () => {
        const response = await invoke('execute_command')
        console.log(response)
      }}>Invoke</button>
      
  )
}
