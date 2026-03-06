'use client'

interface VideoEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export default function VideoEmbed({ videoId, title = 'Video', className = '' }: VideoEmbedProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  )
}
