"use client"

import { useEffect, useState } from "react"

// Deterministic random function using seed
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function Background() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate deterministic positions for nodes and lines
  const generatePositions = () => {
    const lines = Array.from({ length: 50 }, (_, i) => {
      const seed = i * 137.508 // Golden angle approximation
      return {
        x1: seededRandom(seed) * 1920,
        y1: seededRandom(seed + 1) * 1080,
        x2: seededRandom(seed + 2) * 1920,
        y2: seededRandom(seed + 3) * 1080,
        stroke: i % 7 === 0 ? "#3b82f6" : "#ef4444",
        opacity: 0.2 + seededRandom(seed + 4) * 0.3,
      }
    })

    const redNodes = Array.from({ length: 80 }, (_, i) => {
      const seed = i * 234.567
      return {
        x: seededRandom(seed) * 1920,
        y: seededRandom(seed + 1) * 1080,
        size: 2 + seededRandom(seed + 2) * 6,
        delay: seededRandom(seed + 3) * 2,
      }
    })

    const blueNodes = Array.from({ length: 20 }, (_, i) => {
      const seed = i * 345.678
      return {
        x: seededRandom(seed) * 1920,
        y: seededRandom(seed + 1) * 1080,
        size: 1 + seededRandom(seed + 2) * 3,
        delay: seededRandom(seed + 3) * 2,
      }
    })

    return { lines, redNodes, blueNodes }
  }

  const { lines, redNodes, blueNodes } = mounted ? generatePositions() : { lines: [], redNodes: [], blueNodes: [] }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background image - Add your image file to /public/evolvex-background.jpg */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/evolvex-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Fallback: Base dark background with gradient (shown if image not found) */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-red-950/30" />
      
      {/* Animated network nodes overlay */}
      {mounted && (
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="nodeGlow">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="blueNodeGlow">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Network lines */}
            <g stroke="#ef4444" strokeWidth="1" opacity="0.3">
              {lines.map((line, i) => (
                <line
                  key={`line-${i}`}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke={line.stroke}
                  opacity={line.opacity}
                />
              ))}
            </g>
            
            {/* Network nodes - red */}
            {redNodes.map((node, i) => (
              <circle
                key={`node-red-${i}`}
                cx={node.x}
                cy={node.y}
                r={node.size}
                fill="url(#nodeGlow)"
                className="animate-pulse"
                style={{ animationDelay: `${node.delay}s` }}
              />
            ))}
            
            {/* Network nodes - blue */}
            {blueNodes.map((node, i) => (
              <circle
                key={`node-blue-${i}`}
                cx={node.x}
                cy={node.y}
                r={node.size}
                fill="url(#blueNodeGlow)"
                className="animate-pulse"
                style={{ animationDelay: `${node.delay}s` }}
              />
            ))}
          </svg>
        </div>
      )}
      
      {/* Central glow effect (representing the globe) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-red-500/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-red-500/40 rounded-full blur-2xl" />
      </div>
    </div>
  )
}

