import React from 'react'
import Link from 'next/link'

export default function MiniMenu({title, link}: {title: string, link: string}) {
  return (
    <article>
    <Link href={link}>
      <span>{title}</span>
      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="3" height="12" transform="matrix(0 -1 -1 0 12.1055 3)" fill="#262626"/>
        <rect width="3" height="12" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 10.6055 3.5)" fill="#262626"/>
        <rect width="3" height="12" transform="matrix(-1 0 0 1 12.1055 0)" fill="#262626"/>
      </svg>
    </Link>
  </article>
  )
}
