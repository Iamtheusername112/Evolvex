"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, TrendingUp } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Footer() {
  return (
    <footer className="border-t bg-[var(--color-card)]/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-[var(--color-primary)]" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EvolveX
              </span>
            </div>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Premium Forex and Crypto Trading Platform. Trade with confidence and advanced tools.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@evolvex.com"
                className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Desktop: Trading Section */}
          <div className="hidden md:block">
            <h3 className="font-semibold mb-4">Trading</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/dashboard/trading"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Trading Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/markets"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Market Data
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/portfolio"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/analytics"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop: Resources Section */}
          <div className="hidden md:block">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Trading Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop: Legal Section */}
          <div className="hidden md:block">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Risk Disclosure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden mt-8">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="trading">
              <AccordionTrigger className="text-left">Trading</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/dashboard/trading"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Trading Platform
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/markets"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Market Data
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/portfolio"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/analytics"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Analytics
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="resources">
              <AccordionTrigger className="text-left">Resources</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Trading Guides
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Support Center
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="legal">
              <AccordionTrigger className="text-left">Legal</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Risk Disclosure
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors block py-1"
                    >
                      Compliance
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-muted-foreground)]">
            © {new Date().getFullYear()} EvolveX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[var(--color-muted-foreground)]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

