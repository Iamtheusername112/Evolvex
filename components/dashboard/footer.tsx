"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function DashboardFooter() {
  return (
    <footer className="border-t bg-[var(--color-card)]/80 backdrop-blur-md mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-muted-foreground)]">
            © {new Date().getFullYear()} EvolveX. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:support@evolvex.com"
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted-foreground)]">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            System Operational
          </div>
        </div>
      </div>
    </footer>
  )
}

