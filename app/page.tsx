"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Zap,
  Bot,
  BarChart3,
  Target,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Play,
} from "lucide-react"
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import ROICalculator from "@/components/roi-calculator"

function AnimatedSphere() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#00FFCC"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function FloatingGeometry() {
  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-4, 2, -2]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#00FFCC" transparent opacity={0.6} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[4, -1, -3]}>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#000000" transparent opacity={0.4} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[2, 3, -1]}>
          <tetrahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#00FFCC" transparent opacity={0.5} />
        </mesh>
      </Float>
    </>
  )
}

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-background cursor-custom overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl animate-float3d"></div>
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 via-accent/15 to-transparent rounded-full blur-3xl animate-float3d-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-accent/25 to-transparent rounded-full blur-3xl animate-float3d"></div>
        <div className="geometric-pattern-futuristic"></div>
        <div className="futuristic-grid opacity-30"></div>

        <div
          className="fixed w-4 h-4 bg-accent/30 rounded-full blur-sm pointer-events-none z-50 transition-all duration-300"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
          }}
        />
      </div>

      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 animate-neon-pulse">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/athris-logo.png"
              alt="ATHRIS Agency"
              width={120}
              height={40}
              className="h-10 w-auto animate-hologram"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 neon-text"
            >
              Services
            </a>
            <a
              href="#blog"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 neon-text"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 neon-text"
            >
              Contact
            </a>
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://twitter.com/athrisagency"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/athrisagency"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/athrisagency"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/athrisagency"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.315.315.49.753.49 1.243 0 .49-.175.928-.49 1.243-.369.315-.807.49-1.297.49z" />
                </svg>
              </a>
            </div>
            <Button className="btn-futuristic hover:scale-105 transition-transform duration-300">Get Started</Button>
          </nav>
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center relative bg-black text-white overflow-hidden">
        {/* Video background placeholder - in production, replace with actual video */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 bg-[url('/abstract-digital-pattern-background.png')] bg-cover bg-center opacity-10"></div>

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Main animated heading matching reference design */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="block text-white mb-4">Innovative solutions for</span>
            <span className="block text-white relative">
              <span className="animate-text-cycle">
                <span className="text-white">Social Marketing</span>
              </span>
            </span>
          </h1>

          {/* Two-column layout for video and description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16">
            {/* Left side - Video play button with circular text */}
            <div className="flex flex-col items-center space-y-8">
              <div className="relative">
                {/* Play button */}
                <button className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                  <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>

                {/* Circular rotating text around play button */}
                <div className="absolute inset-0 w-32 h-32 -m-6">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <defs>
                      <path id="circle" d="M 50,50 m -20,0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0" />
                    </defs>
                    <text className="text-xs fill-white/70 font-medium">
                      <textPath href="#circle">LEARN MORE • LEARN MORE • LEARN MORE •</textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right side - Description and CTA */}
            <div className="text-left space-y-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital
                experiences that captivate audiences and drive results. From innovative web design to compelling content
                and cutting-edge digital strategies.
              </p>

              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-4 overflow-hidden relative border-y border-gray-700">
        <div className="moving-band-services whitespace-nowrap">
          <span className="inline-flex items-center text-lg font-medium mx-8">
            <svg className="w-6 h-6 mr-3 text-white" viewBox="0 0 24 25" fill="none">
              <path
                d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            Custom Branding
          </span>
          <span className="inline-flex items-center text-lg font-medium mx-8">
            <svg className="w-6 h-6 mr-3 text-white" viewBox="0 0 24 25" fill="none">
              <path
                d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            Website Design
          </span>
          <span className="inline-flex items-center text-lg font-medium mx-8">
            <svg className="w-6 h-6 mr-3 text-white" viewBox="0 0 24 25" fill="none">
              <path
                d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            Digital Marketing
          </span>
          <span className="inline-flex items-center text-lg font-medium mx-8">
            <svg className="w-6 h-6 mr-3 text-white" viewBox="0 0 24 25" fill="none">
              <path
                d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            Strategy Consulting
          </span>
          <span className="inline-flex items-center text-lg font-medium mx-8">
            <svg className="w-6 h-6 mr-3 text-white" viewBox="0 0 24 25" fill="none">
              <path
                d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            Analytics & Reporting
          </span>
          <span className="inline-flex items-center text-lg font-medium mx-8">
            <svg className="w-6 h-6 mr-3 text-white" viewBox="0 0 24 25" fill="none">
              <path
                d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            Established in Casablanca since 2019
          </span>
        </div>
      </section>

      <section className="py-32 px-4 bg-card/30 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif font-bold text-4xl md:text-6xl mb-6 animate-fade-in-up-3d neon-text">
              What We Stand For
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up-3d animation-delay-200">
              Our core values drive everything we do, ensuring authentic, results-driven AI marketing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <Card className="card-3d border-accent/20 hover:border-accent/50 bg-card/50 backdrop-blur-sm animate-fade-in-up-3d animation-delay-400 group text-center">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-neon-pulse">
                  <Target className="h-10 w-10 text-black" />
                </div>
                <CardTitle className="font-serif text-2xl mb-4 neon-text">Transparency First</CardTitle>
                <CardDescription className="text-lg">
                  We believe in complete transparency. Every algorithm, every decision, every result is explained in
                  clear, understandable terms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-3d border-accent/20 hover:border-accent/50 bg-card/50 backdrop-blur-sm animate-fade-in-up-3d animation-delay-600 group text-center">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-neon-pulse">
                  <TrendingUp className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="font-serif text-2xl mb-4 neon-text">Results-Driven</CardTitle>
                <CardDescription className="text-lg">
                  Every strategy, every campaign, every piece of content is designed with one goal: measurable business
                  growth and ROI.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-3d border-accent/20 hover:border-accent/50 bg-card/50 backdrop-blur-sm animate-fade-in-up-3d animation-delay-800 group text-center">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-neon-pulse">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="font-serif text-2xl mb-4 neon-text">Human-Centered AI</CardTitle>
                <CardDescription className="text-lg">
                  AI amplifies human creativity, it doesn't replace it. We ensure every automated solution maintains
                  authentic brand voice and values.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 animate-fade-in-up">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Comprehensive AI-powered marketing solutions organized into four strategic categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up animation-delay-400">
            {/* Strategy & Foundation */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <BarChart3 className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl mb-3">Strategy & Foundation</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4">
                  The Blueprint for Success
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  AI-Powered Market Intelligence
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Intelligent Branding
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  AI Readiness Consulting
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Digital Transformation
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Competitive Analysis
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Strategic Planning
                </div>
              </CardContent>
            </Card>

            {/* Content & Engagement */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Bot className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl mb-3">Content & Engagement</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4">
                  The Voice of Your Brand
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Predictive SEO
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  AI Content Generation
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Hyper-Personalization
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Social Media Automation
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Influencer Matching
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Video & Audio Production
                </div>
              </CardContent>
            </Card>

            {/* Performance & Growth */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl mb-3">Performance & Growth</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4">The Growth Engine</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Predictive Performance Marketing
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  AI-Optimized E-commerce
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Intelligent Lead Nurturing
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Automated A/B Testing
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Dynamic Pricing
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Sales Funnel Optimization
                </div>
              </CardContent>
            </Card>

            {/* Experience & Technology */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Zap className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl mb-3">Experience & Technology</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4">The Smart Architecture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Data-Driven CRO
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Conversational AI
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Predictive Analytics
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Marketing Automation
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Customer Journey Mapping
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  Advanced Integrations
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 animate-fade-in-up">
              Calculate Your Potential ROI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              See exactly how much our AI-powered social media marketing could increase your return on investment.
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-400">
            <ROICalculator />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 animate-fade-in-up">
              AI That Actually Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Our advanced AI doesn't just automate—it thinks, learns, and optimizes your social media strategy in
              real-time.
            </p>
          </div>

          <div className="relative">
            <div
              className="flex animate-slide-infinite gap-8"
              style={{
                width: "calc(300px * 12)", // 6 cards * 2 for seamless loop
                animation: "slideInfinite 30s linear infinite",
              }}
            >
              {/* First set of cards */}
              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <Bot className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">AI Content Generation</CardTitle>
                  <CardDescription>
                    Generate high-converting posts, captions, and hashtags tailored to your brand voice and audience
                    preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Brand voice consistency
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Trending topic integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Multi-platform optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">Predictive Analytics</CardTitle>
                  <CardDescription>
                    Know what will perform before you post. Our AI analyzes patterns to predict engagement and optimize
                    timing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Engagement forecasting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Optimal posting times
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Audience behavior insights
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">Smart Targeting</CardTitle>
                  <CardDescription>
                    AI-powered audience segmentation and targeting that adapts based on real-time performance data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Dynamic audience segments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Lookalike modeling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Behavioral targeting
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">Auto-Optimization</CardTitle>
                  <CardDescription>
                    Continuous A/B testing and optimization that improves your results without any manual intervention.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Real-time adjustments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Performance monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Budget optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">Community Management</CardTitle>
                  <CardDescription>
                    AI-powered response suggestions and sentiment analysis to maintain authentic engagement at scale.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Automated responses
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Sentiment monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Crisis detection
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">Growth Acceleration</CardTitle>
                  <CardDescription>
                    Advanced algorithms that identify growth opportunities and automatically capitalize on viral trends.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Trend identification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Viral content detection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Growth strategy automation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Duplicate set for seamless loop */}
              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <Bot className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">AI Content Generation</CardTitle>
                  <CardDescription>
                    Generate high-converting posts, captions, and hashtags tailored to your brand voice and audience
                    preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Brand voice consistency
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Trending topic integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Multi-platform optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">Predictive Analytics</CardTitle>
                  <CardDescription>
                    Know what will perform before you post. Our AI analyzes patterns to predict engagement and optimize
                    timing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Engagement forecasting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Optimal posting times
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Audience behavior insights
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">Smart Targeting</CardTitle>
                  <CardDescription>
                    AI-powered audience segmentation and targeting that adapts based on real-time performance data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Dynamic audience segments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Lookalike modeling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Behavioral targeting
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">Auto-Optimization</CardTitle>
                  <CardDescription>
                    Continuous A/B testing and optimization that improves your results without any manual intervention.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Real-time adjustments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Performance monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Budget optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">Community Management</CardTitle>
                  <CardDescription>
                    AI-powered response suggestions and sentiment analysis to maintain authentic engagement at scale.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Automated responses
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Sentiment monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Crisis detection
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 group flex-shrink-0 w-72">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-serif">Growth Acceleration</CardTitle>
                  <CardDescription>
                    Advanced algorithms that identify growth opportunities and automatically capitalize on viral trends.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Trend identification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Viral content detection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Growth strategy automation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 animate-fade-in-up">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Stay ahead of the curve with our latest thoughts on AI-powered marketing and social media trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-400 group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/ai-robot-creating-social-media-content-on-computer.png"
                  alt="AI Content Creation"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">December 15, 2024</span>
                </div>
                <CardTitle className="font-serif group-hover:text-primary transition-colors duration-300">
                  How AI is Revolutionizing Social Media Content Creation
                </CardTitle>
                <CardDescription>
                  Discover how artificial intelligence is transforming the way brands create, optimize, and distribute
                  content across social platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  From automated caption generation to predictive analytics, AI tools are enabling marketers to create
                  more engaging content at scale. Learn about the latest innovations and how they're changing the
                  game...
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:scale-105 transition-transform duration-300 bg-transparent"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600 group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/influencer-marketing-analytics-dashboard-with-ai-i.png"
                  alt="AI Influencer Marketing"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">December 10, 2024</span>
                </div>
                <CardTitle className="font-serif group-hover:text-primary transition-colors duration-300">
                  The Future of Influencer Marketing: AI-Driven Partnerships
                </CardTitle>
                <CardDescription>
                  Explore how AI is helping brands identify the perfect influencers and optimize collaboration
                  strategies for maximum ROI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Traditional influencer discovery methods are becoming obsolete. AI-powered platforms can now analyze
                  millions of profiles to find the perfect match for your brand, predict campaign performance...
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:scale-105 transition-transform duration-300 bg-transparent"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-800 group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/predictive-analytics-charts-and-graphs-for-social-.png"
                  alt="Predictive Analytics"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">December 5, 2024</span>
                </div>
                <CardTitle className="font-serif group-hover:text-primary transition-colors duration-300">
                  Maximizing ROI with Predictive Social Media Analytics
                </CardTitle>
                <CardDescription>
                  Learn how predictive analytics can help you make data-driven decisions and optimize your social media
                  budget allocation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stop guessing what content will perform. Advanced AI algorithms can now predict engagement rates,
                  optimal posting times, and even viral potential before you hit publish...
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:scale-105 transition-transform duration-300 bg-transparent"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-1000 group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/brand-voice-ai-chatbot-interface-with-authentic-me.png"
                  alt="AI Brand Voice"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">November 28, 2024</span>
                </div>
                <CardTitle className="font-serif group-hover:text-primary transition-colors duration-300">
                  Building Authentic Brand Voice with AI Content Tools
                </CardTitle>
                <CardDescription>
                  Discover how to maintain brand authenticity while leveraging AI tools for content creation and
                  community management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The key to successful AI-powered marketing isn't replacing human creativity—it's amplifying it. Learn
                  how to train AI systems to understand and replicate your unique brand voice...
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:scale-105 transition-transform duration-300 bg-transparent"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 animate-fade-in-up">
              Real Results, Real Fast
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              See how our AI-powered approach delivers measurable results for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center animate-fade-in-up animation-delay-400 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2 counter-animation">500%</div>
              <div className="text-muted-foreground">Average ROI Increase</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-600 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2 counter-animation">2.3M</div>
              <div className="text-muted-foreground">Posts Generated</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-800 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2 counter-animation">95%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-1000 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2 counter-animation">48hrs</div>
              <div className="text-muted-foreground">Average Setup Time</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-1200">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle className="font-serif">"Game-changing results in just 30 days"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Our engagement increased by 340% and lead generation by 280%. The AI literally transformed our social
                  media presence overnight."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-1400">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle className="font-serif">"Finally, social media that works for us"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The AI handles everything while we focus on our business. Our follower count grew 10x and sales
                  increased by 450%."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Mike Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Founder, Local Fitness Co.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 animate-fade-in-up">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Real results from real businesses who transformed their social media presence with our AI platform.
            </p>
          </div>

          {/* Sliding testimonials carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-testimonials hover:pause-animation">
              {/* Testimonial 1 */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                <Card className="border-border hover:shadow-2xl transition-all duration-500 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="font-serif">"Game-changing results in just 30 days"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      "Our engagement increased by 340% and lead generation by 280%. The AI literally transformed our
                      social media presence overnight."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="text-accent font-semibold">SJ</span>
                      </div>
                      <div>
                        <div className="font-semibold">Sarah Johnson</div>
                        <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                <Card className="border-border hover:shadow-2xl transition-all duration-500 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="font-serif">"Finally, social media that works for us"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      "The AI handles everything while we focus on our business. Our follower count grew 10x and sales
                      increased by 450%."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="text-accent font-semibold">MR</span>
                      </div>
                      <div>
                        <div className="font-semibold">Mike Rodriguez</div>
                        <div className="text-sm text-muted-foreground">Founder, Local Fitness Co.</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 3 */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                <Card className="border-border hover:shadow-2xl transition-all duration-500 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="font-serif">"ROI increased by 600% in 3 months"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      "The predictive analytics helped us target the right audience at the perfect time. Our marketing
                      budget now generates 6x more revenue."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="text-accent font-semibold">AL</span>
                      </div>
                      <div>
                        <div className="font-semibold">Amanda Lee</div>
                        <div className="text-sm text-muted-foreground">Marketing Director, E-commerce Plus</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 4 */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                <Card className="border-border hover:shadow-2xl transition-all duration-500 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="font-serif">"Saved 20 hours per week on content"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      "The AI creates better content than our previous agency, and it's available 24/7. We can finally
                      focus on strategy instead of execution."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="text-accent font-semibold">DK</span>
                      </div>
                      <div>
                        <div className="font-semibold">David Kim</div>
                        <div className="text-sm text-muted-foreground">CMO, HealthTech Solutions</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 5 */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                <Card className="border-border hover:shadow-2xl transition-all duration-500 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="font-serif">"From 0 to 100K followers in 6 months"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      "Starting from scratch, the AI helped us build a massive following with highly engaged users. Our
                      brand awareness skyrocketed."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="text-accent font-semibold">RT</span>
                      </div>
                      <div>
                        <div className="font-semibold">Rachel Thompson</div>
                        <div className="text-sm text-muted-foreground">Founder, Sustainable Fashion Co.</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 6 */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                <Card className="border-border hover:shadow-2xl transition-all duration-500 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="font-serif">"Best investment we've made for growth"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      "The AI platform pays for itself within the first month. Our customer acquisition cost dropped by
                      70% while conversion rates doubled."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="text-accent font-semibold">JM</span>
                      </div>
                      <div>
                        <div className="font-semibold">James Mitchell</div>
                        <div className="text-sm text-muted-foreground">VP Marketing, FinTech Innovations</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Duplicate first few for seamless loop */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                <Card className="border-border hover:shadow-2xl transition-all duration-500 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="font-serif">"Game-changing results in just 30 days"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      "Our engagement increased by 340% and lead generation by 280%. The AI literally transformed our
                      social media presence overnight."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="text-accent font-semibold">SJ</span>
                      </div>
                      <div>
                        <div className="font-semibold">Sarah Johnson</div>
                        <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 animate-fade-in-up">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Ready to transform your social media presence? Let's discuss how our AI-powered solutions can help your
              business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up animation-delay-400">
              <div>
                <h3 className="font-serif font-bold text-2xl mb-6">Let's Start a Conversation</h3>
                <p className="text-muted-foreground mb-8">
                  Our team of AI marketing experts is ready to help you revolutionize your social media strategy. Reach
                  out to us and let's discuss your goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-muted-foreground">hello@athrisagency.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-muted-foreground">+212 5XX-XXX-XXX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-muted-foreground">Casablanca, Morocco</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-600">
              <CardHeader>
                <CardTitle className="font-serif">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" className="transition-all duration-300 focus:scale-105" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" className="transition-all duration-300 focus:scale-105" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and how we can help..."
                    rows={5}
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <Button className="w-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6 animate-fade-in-up">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
            Join thousands of businesses already using AI to dominate their social media presence. Get your free audit
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Free Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent hover:scale-105 transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4 animate-fade-in-up animation-delay-600">
            No credit card required • Comprehensive analysis • Actionable insights
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up animation-delay-200">
              <Image
                src="/images/athris-logo.png"
                alt="ATHRIS Agency"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-muted-foreground text-sm mb-4">
                The future of social media marketing is here. Powered by AI, driven by results.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://twitter.com/athrisagency"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/athrisagency"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/athrisagency"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/athrisagency"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors hover:scale-105 inline-block">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors hover:scale-105 inline-block">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors hover:scale-105 inline-block">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors hover:scale-105 inline-block">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors hover:scale-105 inline-block">
                    About
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-foreground transition-colors hover:scale-105 inline-block">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors hover:scale-105 inline-block">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors hover:scale-105 inline-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up animation-delay-800">
              <h4 className="font-semibold mb-4">Let's Start a Conversation</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Ready to transform your social media presence with AI?
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Get Started Today</Button>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground animate-fade-in-up animation-delay-1000">
            <p>&copy; 2025 ATHRIS Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
