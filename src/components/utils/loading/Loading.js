import React from 'react'
import './Loading.css'
export default function Loading() {
  return (
    <div className="container loader">
      <div className="row">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>

  )
}
