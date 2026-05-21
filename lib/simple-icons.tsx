import * as icons from "simple-icons"

interface SimpleIconProps {
  slug: string
  color?: string
  className?: string
}

// Helper function to convert slug to simple-icons key format
function getIconKey(slug: string): string {
  // Convert slug like "nextdotjs" or "react" to "siNextdotjs" or "siReact"
  const formatted = slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase()
  return `si${formatted}`
}

export function SimpleIcon({ slug, color, className = "w-12 h-12" }: SimpleIconProps) {
  const iconKey = getIconKey(slug)
  const icon = (icons as Record<string, { svg: string; hex: string } | undefined>)[iconKey]

  if (!icon) {
    // Fallback if icon not found
    return (
      <div
        className={`${className} rounded-lg flex items-center justify-center bg-muted`}
        style={{ backgroundColor: color ? `#${color}` : undefined }}
      >
        <span className="sr-only">{slug}</span>
      </div>
    )
  }

  const iconColor = color || icon.hex

  return (
    <div
      className={className}
      style={{ color: `#${iconColor}` }}
      dangerouslySetInnerHTML={{
        __html: icon.svg.replace("<svg", `<svg fill="currentColor" class="w-full h-full"`),
      }}
    />
  )
}
