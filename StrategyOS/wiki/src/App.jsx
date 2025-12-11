import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './styles.css'

const strategyPages = [
  { id: 'readme', title: 'Overview', file: 'README.md', number: '' },
  { id: '1', title: 'Winning Aspiration', file: '1-winning-aspiration.md', number: '1' },
  { id: '2', title: 'Where to Play', file: '2-where-to-play.md', number: '2' },
  { id: '3', title: 'How to Win', file: '3-how-to-win.md', number: '3' },
  { id: '4', title: 'Capabilities', file: '4-capabilities.md', number: '4' },
  { id: '5', title: 'Management Systems', file: '5-management-systems.md', number: '5' },
  { id: 'hypotheses', title: 'Strategic Hypotheses', file: 'hypotheses.md', number: '★' },
]

function App() {
  const [currentPage, setCurrentPage] = useState('readme')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true)
      setError(null)
      
      const page = strategyPages.find(p => p.id === currentPage)
      if (!page) return

      try {
        const response = await fetch(`../strategy/${page.file}`)
        if (!response.ok) throw new Error('Failed to load content')
        
        const text = await response.text()
        
        // Extract last updated date if present
        const dateMatch = text.match(/<!-- Last updated: (.+?) -->/)
        if (dateMatch) {
          setLastUpdated(dateMatch[1])
        } else {
          setLastUpdated(null)
        }
        
        setContent(text)
      } catch (err) {
        setError('Failed to load content. Please ensure the wiki has been built.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [currentPage])

  return (
    <div className="wiki-container">
      <aside className="wiki-sidebar">
        <h1>Strategy Wiki</h1>
        <p className="subtitle">Playing to Win Framework</p>
        
        <nav>
          <ul className="wiki-nav">
            {strategyPages.map(page => (
              <li key={page.id}>
                <button
                  className={currentPage === page.id ? 'active' : ''}
                  onClick={() => setCurrentPage(page.id)}
                >
                  {page.number && <span className="page-number">{page.number}.</span>}
                  {!page.number && <span className="page-number"></span>}
                  {page.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="wiki-main">
        <div className="wiki-content">
          {loading && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}
          {!loading && !error && (
            <>
              {lastUpdated && lastUpdated !== 'YYYY-MM-DD' && (
                <div className="last-updated">Last updated: {lastUpdated}</div>
              )}
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
