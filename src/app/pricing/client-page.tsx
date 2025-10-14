"use client"

import React from "react"
import Image from "next/image"
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
            <a href="#inicio" className="hover:underline">Inicio</a>
            <a href="#features" className="hover:underline">Funcionalidades</a>
            <a href="#planes" className="hover:underline">Planes</a>
            <a href="#acceder" className="hover:underline">Acceder</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="link" size="sm">Acceder</Button>
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
// Hero con dashboard realista
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

        {/* Dashboard animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            <motion.div
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-40"
            />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white dark:bg-slate-900">
              <div className="bg-slate-100 dark:bg-slate-800 p-2 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs text-slate-500">TEX</div>
              </div>
              <div className="relative w-full aspect-video bg-slate-50 dark:bg-slate-900">
                <Image
                  src="/images/banner.jpg"
                  alt="TEX Dashboard Preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// -----------------------------
// Beneficios
// -----------------------------
function Benefits() {
  const features = [
    { icon: ShoppingCart, title: "Tu tienda en minutos", text: "Configura tu catálogo y empieza a vender sin complicaciones." },
    { icon: Server, title: "Gestión inteligente", text: "Organiza tus productos y obtén analíticas en tiempo real." },
    { icon: Globe, title: "Distribución internacional", text: "Vende fácilmente en Colombia y Estados Unidos." },
    { icon: Lock, title: "Pagos seguros", text: "Protegemos tus transacciones y la información de tus clientes." },
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          <GradientText>Todo lo que necesitas para crecer</GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm"
            >
              <f.icon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// -----------------------------
// Pricing
// -----------------------------
function PricingSection() {
  const plans = [
    {
      title: "Free",
      price: "0",
      description: "Funciones básicas para comenzar.",
      features: ["Catálogo limitado", "Soporte por correo", "Hasta 10 productos"],
    },
    {
      title: "Pro",
      price: "29",
      description: "Para emprendedores activos.",
      features: ["Analíticas avanzadas", "Branding personalizado", "Soporte prioritario"],
    },
    {
      title: "Enterprise",
      price: "99",
      description: "Para marcas consolidadas.",
      features: ["API dedicada", "Soporte 24/7", "Integraciones premium"],
    },
  ]

  return (
    <section id="planes" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          <GradientText>Planes hechos para crecer contigo</GradientText>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12">
          Escoge el plan ideal para tu negocio, sin comisiones ocultas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="rounded-2xl shadow-md border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{p.title}</CardTitle>
                  <p className="text-sm text-slate-500">{p.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">${p.price}</div>
                  <ul className="mb-6 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                    {p.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white">
                    Comenzar con este plan
                  </Button>
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
// Testimonios
// -----------------------------
function Testimonials() {
  const users = [
    {
      name: "María Torres",
      text: "Duplicamos nuestras ventas en 2 meses gracias a TEX.",
    },
    {
      name: "Carlos Gómez",
      text: "La gestión de productos nunca fue tan fácil.",
    },
    {
      name: "Lucía Martínez",
      text: "Excelente soporte y plataforma muy estable.",
    },
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          <GradientText>Lo que dicen nuestros usuarios</GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {users.map((u, i) => (
            <Card key={i} className="rounded-2xl p-6 shadow-sm">
              <CardContent>
                <Avatar className="mx-auto mb-4" />
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{u.text}</p>
                <div className="font-semibold">{u.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// -----------------------------
// CTA Final
// -----------------------------
function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-violet-600 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Crea tu cuenta y comienza a vender hoy mismo</h2>
      <Button size="lg" className="bg-white text-blue-600 rounded-2xl font-semibold">
        Registrarme en TEX
      </Button>
    </section>
  )
}

// -----------------------------
// Footer
// -----------------------------
function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
        <a href="#">Soporte</a>
        <a href="#">Términos</a>
        <a href="#">Política de privacidad</a>
      </div>
      <p>© 2025 TEX. Todos los derechos reservados.</p>
    </footer>
  )
}

// -----------------------------
// Página principal
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
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
