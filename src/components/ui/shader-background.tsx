"use client"
// Animated shader background with mesh gradient effects
import { useState, useEffect, useRef } from "react"
import { MeshGradient, DotsOrbit } from "@paper-design/shaders-react"
import { cn } from "@/lib/utils"

type EffectType = "mesh" | "dots" | "combined"

interface ShaderBackgroundProps {
  effect?: EffectType
  intensity?: number
  speed?: number
  className?: string
  children?: React.ReactNode
}

// Wrapper component to isolate canvas from React's DOM management
function ShaderCanvas({ effect, speed }: { effect: EffectType; speed: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Cleanup function to safely remove canvas elements
    return () => {
      if (containerRef.current) {
        // Clear the container manually to prevent React conflicts
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild)
        }
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0">
      {effect === "mesh" && (
        <MeshGradient
          color1="#ffffff"
          color2="#f8fcff"
          color3="#f0f7ff"
          color4="#e8f4ff"
          speed={speed}
          style={{ width: "100%", height: "100%" }}
        />
      )}

      {effect === "dots" && (
        <div className="relative w-full h-full bg-white">
          <DotsOrbit
            color1="#00d4aa"
            color2="#ff7b54"
            speed={speed}
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.4,
            }}
          />
        </div>
      )}

      {effect === "combined" && (
        <>
          <MeshGradient
            color1="#ffffff"
            color2="#f8fcff"
            color3="#f0f7ff"
            color4="#e8f4ff"
            speed={speed * 0.5}
            style={{ width: "100%", height: "100%" }}
          />
          <div className="absolute inset-0">
            <DotsOrbit
              color1="#00d4aa"
              color2="#ff7b54"
              speed={speed}
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.3,
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export function ShaderBackground({
  effect = "mesh",
  intensity = 0.8,
  speed = 0.4,
  className,
  children,
}: ShaderBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn("relative w-full h-full bg-white", className)}>
        {children}
      </div>
    )
  }

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Shader effects layer - isolated in separate component */}
      <div className="absolute inset-0 z-0">
        <ShaderCanvas key={`shader-${effect}`} effect={effect} speed={speed} />
      </div>

      {/* Subtle accent glow overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export function ShaderBackgroundDemo() {
  const [effect, setEffect] = useState<EffectType>("mesh")
  const [speed, setSpeed] = useState(0.4)

  return (
    <ShaderBackground effect={effect} speed={speed} className="min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        {/* Controls */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sky-100 max-w-md w-full">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Shader Background</h2>
          
          {/* Effect selector */}
          <div className="mb-4">
            <label className="text-sm text-slate-600 mb-2 block">Effect Type</label>
            <div className="flex gap-2">
              {(["mesh", "dots", "combined"] as const).map((e) => (
                <button
                  key={e}
                  onClick={() => setEffect(e)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    effect === e
                      ? "bg-sky-500 text-white"
                      : "bg-sky-100 text-sky-700 hover:bg-sky-200"
                  )}
                >
                  {e.charAt(0).toUpperCase() + e.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Speed control */}
          <div>
            <label className="text-sm text-slate-600 mb-2 block">
              Speed: {speed.toFixed(1)}
            </label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="w-full accent-sky-500"
            />
          </div>
        </div>
      </div>
    </ShaderBackground>
  )
}
