import type React from "react"
import { ArrowLeft, Linkedin, Twitter } from "lucide-react"

export function App() {
  const path = window.location.pathname

  if (path.startsWith("/lighter-support")) {
    return <LighterSupportPage />
  }

  return <HomePage />
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark">
      <main className="min-h-screen bg-background text-foreground">{children}</main>
    </div>
  )
}

function HomePage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl px-6 py-20 md:py-32">
        <section className="mb-24">
          <div className="mb-10 flex justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full ring-1 ring-muted/20">
              <img
                src="/images/awatar2-20-281-29.jpg"
                alt="Pawel Janeczek"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <h1 className="mb-6 text-center text-5xl font-extralight tracking-tight text-foreground md:text-6xl">
            Hey, I'm Pawel
          </h1>
          <p className="mx-auto max-w-xl text-center text-base leading-relaxed text-muted-foreground/90">
            I build stuff for the web. Currently working on frontend at Inter Cars and building side projects like
            Domalert and Poliswar. Been coding for over a decade and love turning ideas into real products.
          </p>
        </section>

        <section className="mb-24">
          <h2 className="mb-10 text-xl font-extralight tracking-wide text-muted-foreground/60">Projects</h2>
          <div className="space-y-4">
            <PortfolioLink
              href="https://domalert.pl"
              title="domalert.pl"
              description="Finding and getting notified about best deals on the apartments market."
            />
            <PortfolioLink
              href="https://poliswar.xyz"
              title="poliswar.xyz"
              description="A vibe coded strategic multiplayer game for fun."
            />
            <PortfolioLink
              href="https://apps.apple.com/us/app/lighter-simulator/id6758013623"
              title="Lighter Simulator"
              description="iPhone app with realistic lighter simulation, themes, gestures and sounds."
            />
          </div>
        </section>

        <section className="mb-24">
          <h2 className="mb-10 text-xl font-extralight tracking-wide text-muted-foreground/60">Work</h2>
          <div className="space-y-4">
            <PortfolioLink
              href="https://intercars.eu"
              title="intercars.eu"
              description="Frontend development for Europe's leading auto parts distributor."
            />
            <PortfolioLink
              href="https://hacklab.so"
              title="hacklab.so"
              label="prev"
              description="Learning platform that helps people to gain new experiences."
            />
          </div>
        </section>

        <section>
          <h2 className="mb-10 text-xl font-extralight tracking-wide text-muted-foreground/60">Connect</h2>
          <div className="flex gap-8">
            <SocialLink href="https://www.linkedin.com/in/pjaneczek/" label="LinkedIn" icon={<Linkedin className="h-5 w-5" />} />
            <SocialLink href="https://x.com/paweljaneczek" label="X" icon={<Twitter className="h-5 w-5" />} />
          </div>
        </section>
      </div>
    </PageShell>
  )
}

function PortfolioLink({
  href,
  title,
  description,
  label,
}: {
  href: string
  title: string
  description: string
  label?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-l border-muted/30 py-2 pl-6 transition-all hover:border-foreground/60 hover:pl-8"
    >
      <h3 className="text-lg font-light text-foreground">
        {title}
        {label ? <span className="ml-2 text-xs font-normal text-muted-foreground/40">{label}</span> : null}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground/60">{description}</p>
    </a>
  )
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-muted-foreground/70 transition-all hover:gap-3 hover:text-foreground"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  )
}

function LighterSupportPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl px-6 py-20 md:py-32">
        <a
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-muted-foreground/70 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back</span>
        </a>

        <h1 className="mb-8 text-4xl font-extralight tracking-tight text-foreground md:text-5xl">Lighter Support</h1>

        <div className="space-y-12 leading-relaxed text-muted-foreground/90">
          <section>
            <h2 className="mb-4 text-xl font-light text-foreground">About the App</h2>
            <p>
              Lighter is a premium, realistic virtual simulator for iPhone built with SwiftUI and CoreMotion. Experience
              the art of fire with authentic physics-based flame movement, a variety of elegant themes, and intuitive
              gesture controls that make it feel like a real lighter in your hand.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-light text-foreground">Key Features</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong>Interactive Flame Physics:</strong> The flame reacts to your device's tilt and movement in
                real-time.
              </li>
              <li>
                <strong>Lighter Collection:</strong> Choose from premium themes including Classic Silver, Gold Plated,
                Magma Style, and Antique Brass.
              </li>
              <li>
                <strong>Authentic Experience:</strong> High-quality sound effects and realistic flint wheel mechanical
                animations.
              </li>
              <li>
                <strong>Flashlight Integration:</strong> The device flashlight synchronizes with the flame state for an
                immersive effect.
              </li>
              <li>
                <strong>Intuitive Gestures:</strong> Swipe to open the lid, strike the flint wheel to ignite, and tap or
                close to extinguish.
              </li>
              <li>
                <strong>Works Offline:</strong> Enjoy the full experience without any internet connection.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-light text-foreground">Contact Support</h2>
            <p className="mb-4">Having issues with the app or have suggestions for new themes? I'd love to hear from you.</p>
            <p>
              Email:{" "}
              <a href="mailto:pjanecze@gmail.com" className="text-foreground underline underline-offset-4 hover:no-underline">
                pjanecze@gmail.com
              </a>
            </p>
          </section>

          <section id="policy">
            <h2 className="mb-4 text-xl font-light text-foreground">Privacy Policy</h2>
            <div className="space-y-4">
              <p>
                Lighter uses Firebase Analytics to understand aggregate feature usage and Firebase Crashlytics to
                diagnose crashes and recoverable errors. Firebase may process device, app, usage, and diagnostic
                information as described in{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:no-underline"
                >
                  Google's privacy documentation
                </a>
                .
              </p>
              <p>
                Lighter does not send imported images, creator names, theme names, or CloudKit record identifiers to
                these services. It does not use advertising identifiers or cross-app tracking.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-light text-foreground">Requirements</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>iOS 16.0 or later</li>
              <li>iPhone (Real device required for motion-sensing physics)</li>
            </ul>
          </section>
        </div>
      </div>
    </PageShell>
  )
}
