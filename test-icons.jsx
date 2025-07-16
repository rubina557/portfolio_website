"use client"

import { Github, Linkedin, Twitter, Sun, Moon } from "lucide-react"

export default function TestIcons() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-xl font-bold">Icon Test</h2>
      <div className="flex gap-4 items-center">
        <Github className="w-6 h-6 text-gray-700" />
        <Linkedin className="w-6 h-6 text-blue-600" />
        <Twitter className="w-6 h-6 text-blue-400" />
        <Sun className="w-6 h-6 text-yellow-500" />
        <Moon className="w-6 h-6 text-gray-600" />
      </div>
      <p className="text-sm text-gray-600">If you can see the icons above, Lucide React is working properly.</p>
    </div>
  )
}
