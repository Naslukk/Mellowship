import React from 'react'
import style from './style.module.css'

export function Menu() {
  return (
    <div className={style.menuContainer}>
        <ul>
            <li>Overview</li>
            <li>Insights</li>
            <li className={style.active}>Guests</li>
            <span>|</span>
            <li>Event Page</li>
            <li>Form Builder</li>
            <span>|</span>
            <li>Scan QR</li>
            <li>In-Event</li>
            <span>|</span>
            <li>Logs</li>
            <li>Finance</li>
            <span>|</span>
            <li>Post Event</li>
            <span>|</span>
            <li>Child Events</li>
        </ul>
    </div>
  )
}