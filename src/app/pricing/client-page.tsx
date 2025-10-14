"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import {
  ShoppingCart,
  Server,
  Globe,
  Lock,
  Star,
  CheckCircle,
  User,
} from "lucide-react"

type Currency = "USD" | "COP"

// -----------------------------
// Helper Components
// -----------------------------

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="font-extrabold tracking-tight text-xl">TEX</div>
    </div>
  )
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
      {children}
    </span>
  )
}

// -----------------------------
// Navbar
// -----------------------------

export function Navbar({ onStart }: { onStart?: () => void }) {
  return (
    <nav className="fixed w-full top-0 left-0 z-40 backdrop-blur-sm bg-white/60 dark:bg-black/60 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="hidden md:flex gap-6 text-sm text-slate-700 dark:text-slate-200">
            <a href="#inicio" className="hover:underline">
              Inicio
            </a>
            <a href="#features" className="hover:underline">
              Funcionalidades
            </a>
            <a href="#planes" className="hover:underline">
              Planes
            </a>
            <a href="#acceder" className="hover:underline">
              Acceder
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="link" size="sm">
            Acceder
          </Button>
          <Button
            onClick={onStart}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md"
          >
            Comenzar ahora
          </Button>
        </div>
      </div>
    </nav>
  )
}

// -----------------------------
// Hero
// -----------------------------

function Hero({ onCreate }: { onCreate?: () => void }) {
  return (
    <section id="inicio" className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <GradientText>Vende en línea sin límites con TEX</GradientText>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            Crea tu tienda, gestiona tus productos y comercializa sin fronteras.
            Integraciones para pagos, logística y analíticas que escalan contigo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              onClick={onCreate}
              className="rounded-2xl px-6 py-3 shadow-md bg-gradient-to-r from-blue-600 to-violet-600 text-white"
            >
              Crear mi cuenta
            </Button>
            <Button variant="outline" className="rounded-2xl px-6 py-3">
              Explorar planes
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div className="text-xs text-slate-600">Sin comisiones ocultas</div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-slate-500" />
              <div className="text-xs text-slate-600">Ventas en CO & US</div>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-slate-500" />
              <div className="text-xs text-slate-600">Pagos seguros</div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-slate-500" />
              <div className="text-xs text-slate-600">Soporte 24/7</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-full aspect-video rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="p-8">
              <div className="h-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-48 h-6 rounded-lg bg-slate-200/60" />
                  <div className="w-24 h-6 rounded-lg bg-slate-200/60" />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-white/70 rounded-lg p-4 shadow-inner">
                    Dashboard preview
                  </div>
                  <div className="bg-white/70 rounded-lg p-4 shadow-inner">
                    Orders
                  </div>
                </div>
                <div className="h-12 bg-slate-100 rounded-lg" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// -----------------------------
// Benefits
// -----------------------------

const benefits = [
  { title: "Tu tienda en minutos", icon: ShoppingCart, desc: "Plantillas y onboarding rápido." },
  { title: "Gestión inteligente de productos", icon: Server, desc: "SKU, variantes y stock centralizado." },
  { title: "Distribución internacional", icon: Globe, desc: "Logística y aduanas integradas." },
  { title: "Pagos seguros y transparentes", icon: Lock, desc: "Pasarelas en COP y USD." },
  { title: "Analíticas accionables", icon: Star, desc: "Panel con métricas comerciales." },
  { title: "Soporte y crecimiento", icon: User, desc: "Soporte por expertos y onboarding pro." },
]

function BenefitCard({ title, desc, Icon }: { title: string; desc: string; Icon: any }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white/60 dark:bg-slate-900/60 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-violet-50">
          <Icon className="w-6 h-6 text-slate-700" />
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function Benefits() {
  return (
    <section id="features" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Beneficios que impulsan ventas</h3>
        <p className="text-slate-600 mt-2 max-w-2xl">
          Herramientas pensadas para que conviertas más y administres sin fricción.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <BenefitCard key={b.title} title={b.title} desc={b.desc} Icon={b.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

// -----------------------------
// Pricing Section
// -----------------------------

interface PricingPlan {
  id: string
  name: string
  priceUSD: number
  priceCOP: number
  features: string[]
  highlight?: boolean
}

const PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    priceUSD: 0,
    priceCOP: 0,
    features: ["Tienda básica", "10 productos", "Soporte community"],
  },
  {
    id: "pro",
    name: "Pro",
    priceUSD: 29,
    priceCOP: 120000,
    features: ["Productos ilimitados", "Analíticas", "Branding personalizado"],
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceUSD: 199,
    priceCOP: 820000,
    features: ["Soporte dedicado", "API y SLAs", "Integraciones personalizadas"],
  },
]

export function PricingSection() {
  const [currency, setCurrency] = React.useState<Currency>("USD")

  const price = (plan: PricingPlan) =>
    currency === "USD"
      ? `$${plan.priceUSD}`
      : `COP ${plan.priceCOP.toLocaleString()}`

  return (
    <section id="planes" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Planes hechos para crecer contigo.</h2>
            <p className="text-slate-600 mt-2">
              Escoge el plan ideal para tu negocio, sin comisiones ocultas.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm">Moneda</div>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1 rounded-full ${currency === "USD" ? "bg-slate-100" : ""}`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency("COP")}
                className={`px-3 py-1 rounded-full ${currency === "COP" ? "bg-slate-100" : ""}`}
              >
                COP
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={plan.id}
              className={`rounded-2xl p-6 border ${
                plan.highlight ? "border-violet-500 shadow-lg" : "border-slate-200"
              } bg-white/60 dark:bg-slate-900/60`}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold">{plan.name}</div>
                      <div className="text-sm text-slate-500">{price(plan)} / mes</div>
                    </div>
                    {plan.highlight && (
                      <div className="text-xs px-2 py-1 rounded-full bg-violet-100 text-violet-700">
                        Popular
                      </div>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-2xl">Comenzar con este plan</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// -----------------------------
// Testimonials
// -----------------------------

const TESTIMONIALS = [
  { name: "María G.", role: "Emprendedora", text: "Duplicamos nuestras ventas en 2 meses gracias a TEX." },
  { name: "Carlos P.", role: "TI", text: "Integración sencilla y soporte rápido." },
  { name: "Luisa R.", role: "Marca", text: "Llegamos a clientes en EE. UU. sin dolores de cabeza." },
]

export function Testimonials() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(t)
  }, [])

  const current = TESTIMONIALS[index]

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Lo que dicen nuestros usuarios</h3>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <Card className="rounded-2xl">
            <CardContent className="flex gap-4 items-center">
              <Avatar>
                <div className="rounded-full bg-slate-200 w-10 h-10 flex items-center justify-center">
                  {current.name[0]}
                </div>
              </Avatar>
              <div>
                <div className="font-semibold">
                  {current.name}{" "}
                  <span className="text-sm text-slate-500">· {current.role}</span>
                </div>
                <div className="text-slate-600 mt-1">{current.text}</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// -----------------------------
// Final CTA + Footer
// -----------------------------

export function FinalCTA() {
  return (
    <section className="py-12 mt-8 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl mx-6 md:mx-auto md:max-w-7xl p-8 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Crea tu cuenta y comienza a vender hoy mismo.</h3>
          <p className="mt-2 text-slate-100/90">
            Sin complicaciones. Sin comisiones ocultas. Solo ventas.
          </p>
        </div>
        <div>
          <Button className="rounded-2xl bg-white text-blue-700">
            Registrarme en TEX
          </Button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mt-12 py-8 text-sm text-slate-600 dark:text-slate-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© 2025 TEX. Todos los derechos reservados.</div>
        <div className="flex gap-4">
          <a href="#">Soporte</a>
          <a href="#">Términos</a>
          <a href="#">Política de privacidad</a>
        </div>
      </div>
    </footer>
  )
}

// -----------------------------
// Main Composition
// -----------------------------

export default function ClientPricingPage() {
  const handleStart = () => console.log("Comenzar flujo de registro")

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <Navbar onStart={handleStart} />

      <main className="pt-20">
        <Hero onCreate={handleStart} />
        <Benefits />
        <PricingSection />
        <Testimonials />
        <div className="max-w-7xl mx-auto px-6">
          <FinalCTA />
          <Footer />
        </div>
      </main>
    </div>
  )
}
