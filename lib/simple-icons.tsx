"use client"

import { useEffect, useState } from "react"

interface SimpleIconProps {
  slug: string
  color: string
  className?: string
}

export function SimpleIcon({ slug, color, className = "w-12 h-12" }: SimpleIconProps) {
  const [svgContent, setSvgContent] = useState<string>("")

  useEffect(() => {
    fetch(`https://cdn.simpleicons.org/${slug}/${color}`)
      .then((res) => res.text())
      .then((svg) => {
        setSvgContent(svg)
      })
      .catch(() => {
        // Fallback if icon fails to load
        setSvgContent("")
      })
  }, [slug])

  if (!svgContent) {
    return (
      <div className={className} style={{ backgroundColor: color, borderRadius: "8px" }}>
        <span className="sr-only">{slug}</span>
      </div>
    )
  }

  return <div className={className} style={{ color }} dangerouslySetInnerHTML={{ __html: svgContent }} />
}
