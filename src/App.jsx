import React from 'react'
import CommentSection from './components/CommentSection'

const App = () => {

  const comments = {
    id: 1,
    items: [
      {
        id: 2,
        reply: 'Hello World',
        items: [
          {
            id: 3,
            reply: 'Hello Again',
            items: []
          }
        ]
      },
      {
        id: 4,
        reply: 'Hello 4th time',
        items: []
      }
    ]
  }

  return (
    <div>
      <CommentSection />
    </div>
  )
}

export default App