"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  ArrowRight,
  Smartphone,
  Globe,
  Database,
  Palette,
  Code,
  Wifi,
  Cpu,
  Zap,
  Network,
  Star,
  TrendingUp,
  Settings,
} from "lucide-react"

export default function XenotixLanding() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      {}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      {}
      <nav
        className={`fixed top-0 w-full z-50 ${isDark ? "bg-gray-900/80" : "bg-white/80"} backdrop-blur-md border-b ${isDark ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">Xenotix Tech</div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
              >
                Home
              </a>
              <a
                href="#"
                className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
              >
                Tech Stack
              </a>
              <a
                href="#"
                className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
              >
                Services
              </a>
              <a
                href="#"
                className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
              >
                Portfolio
              </a>
              <a
                href="#"
                className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}
              >
                Articles
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Contact Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {}
      <div className="relative pt-24 pb-16">
        {}
        <FloatingCards isDark={isDark} />

        {}
        <div className="max-w-4xl mx-auto text-center px-6 py-16">
          <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>Xenotix Tech</div>
          <h1 className={`text-5xl md:text-7xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
            Got a startup Idea ?
          </h1>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"} mb-12`}>Let's Turn It Into Reality.</p>

          {}
          <div className="flex justify-center items-center space-x-4 mb-16">
            {[Smartphone, Globe, Database, Palette, Code, Wifi].map((Icon, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl ${isDark ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm border ${isDark ? "border-gray-700" : "border-gray-200"} hover:scale-110 transition-transform cursor-pointer`}
              >
                <Icon className={`h-6 w-6 ${isDark ? "text-gray-300" : "text-gray-600"}`} />
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="max-w-4xl mx-auto text-center px-6">
          <Card
            className={`${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"} backdrop-blur-sm p-8`}
          >
            <CardContent className="p-0">
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
                Curious About IoT..?
              </h2>
              <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"} mb-8`}>Why Not Create It?</p>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white mb-8">
                Praepoint <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {}
              <div className="relative">
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  {[
                    { icon: Wifi, label: "WiFi" },
                    { icon: Cpu, label: "CPU" },
                    { icon: Network, label: "Network" },
                    { icon: Settings, label: "Settings" },
                    { icon: Database, label: "Database" },
                    { icon: Zap, label: "Power" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl ${isDark ? "bg-purple-900/30" : "bg-purple-100"} border ${isDark ? "border-purple-700/50" : "border-purple-200"}`}
                    >
                      <item.icon className={`h-6 w-6 mx-auto ${isDark ? "text-purple-300" : "text-purple-600"}`} />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function FloatingCards({ isDark }: { isDark: boolean }) {
  return (
    <>
      {}
      <Card
        className={`absolute top-32 left-8 w-72 ${isDark ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200"} backdrop-blur-sm transform -rotate-12 hover:rotate-0 transition-transform duration-300`}
      >
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Xenotix Tech</div>
              <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Development Team</div>
            </div>
          </div>
          <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>Just Dreaming, Start Building</p>
        </CardContent>
      </Card>

      {}
      <Card
        className={`absolute top-40 right-8 w-72 ${isDark ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200"} backdrop-blur-sm transform rotate-12 hover:rotate-0 transition-transform duration-300`}
      >
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Xenotix Tech</div>
              <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Mobile Development</div>
            </div>
          </div>
          <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>Building next-gen mobile solutions</p>
        </CardContent>
      </Card>

      {}
      <Card
        className={`absolute top-1/2 left-4 w-64 ${isDark ? "bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-700" : "bg-gradient-to-br from-purple-100 to-blue-100 border-purple-200"} backdrop-blur-sm transform -translate-y-1/2 hover:scale-105 transition-transform duration-300`}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className={`text-sm ${isDark ? "text-purple-300" : "text-purple-600"}`}>Artificial Intelligence</div>
            <Badge variant="secondary" className="text-xs">
              Blockchain
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>Machine Learning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>Smart Contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>Data Analytics</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {}
      <Card
        className={`absolute bottom-20 left-12 w-80 ${isDark ? "bg-gradient-to-br from-pink-900/80 to-purple-900/80 border-pink-700" : "bg-gradient-to-br from-pink-100 to-purple-100 border-pink-200"} backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-transform duration-300`}
      >
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Palette className={`h-6 w-6 ${isDark ? "text-pink-300" : "text-pink-600"}`} />
            <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>UI/UX Designing</div>
          </div>
          <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"} mb-3`}>
            Creating beautiful, intuitive user experiences with modern design principles.
          </p>
          <div className="flex space-x-2">
            <Badge variant="outline" className="text-xs">
              Figma
            </Badge>
            <Badge variant="outline" className="text-xs">
              Adobe XD
            </Badge>
            <Badge variant="outline" className="text-xs">
              Sketch
            </Badge>
          </div>
        </CardContent>
      </Card>

      {}
      <Card
        className={`absolute top-1/3 right-4 w-72 ${isDark ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200"} backdrop-blur-sm transform translate-y-1/2 hover:scale-105 transition-transform duration-300`}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div>
                <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Google Ads</div>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>4.8 Reviews</span>
                </div>
              </div>
            </div>
            <div className="text-green-500 text-sm font-semibold">Verified</div>
          </div>
          <div className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>META ADS</div>
          <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Drive targeted traffic and maximize ROI with our expert ad management.
          </p>
        </CardContent>
      </Card>

      {}
      <Card
        className={`absolute bottom-32 right-8 w-80 ${isDark ? "bg-gradient-to-br from-blue-900/80 to-indigo-900/80 border-blue-700" : "bg-gradient-to-br from-blue-100 to-indigo-100 border-blue-200"} backdrop-blur-sm transform -rotate-6 hover:rotate-0 transition-transform duration-300`}
      >
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Branding</div>
              <div className={`text-sm ${isDark ? "text-blue-300" : "text-blue-600"}`}>Living Identities</div>
            </div>
          </div>
          <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>Social Media Marketing</div>
          <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"} mb-3`}>
            Unlock the power of possibilities for your brand. Our research and approach will help you enhance your
            online presence.
          </p>
          <div className="flex space-x-2">
            <Badge variant="secondary" className="text-xs">
              Strategy
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Content
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Analytics
            </Badge>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
