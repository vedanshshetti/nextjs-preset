"use client"
import React, { useState } from 'react'

const ChatPage = () => {
  const [model, setModel] = useState('gpt-4')
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ model, query }),
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      setResponse(data.response || data.message || JSON.stringify(data, null, 2))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
      setResponse('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">AI Chatbot</h1>

        <div className="rounded-lg shadow-md p-6 mb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="model" className="block text-sm font-medium mb-1">
                Model
              </label>
              <select
                id="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option className='text-black' value="gpt-4">GPT-4</option>
                <option className='text-black' value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                <option className='text-black' value="claude-3">Claude 3</option>
                <option className='text-black' value="gemini-3">Gemini 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="query" className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your message here..."
                rows={4}
                className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {response && (
          <div className="bg-slate-50 dark:bg-slate-800 border border-gray-200 rounded-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">AI Response</h2>
            <div className="whitespace-pre-wrap text-gray-800 dark:text-gray-100">{response}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatPage