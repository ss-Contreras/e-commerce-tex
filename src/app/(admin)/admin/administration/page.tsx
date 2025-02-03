"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const stats = [
  { title: "Ventas Totales", value: "$15,230", change: "+12.5%" },
  { title: "Pedidos", value: "1,240", change: "+8.3%" },
  { title: "Usuarios Activos", value: "542", change: "+5.2%" },
  { title: "Productos Vendidos", value: "3,450", change: "+15.7%" },
];

// Motion Variants for Staggered Animations
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AdminPage() {
  return (
    <div className="space-y-6 min-h-screen overflow-auto">

      {/* Page Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold"
      >
        Panel de Administración
      </motion.h1>

      {/* Stats Cards with Staggered Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => (
          <motion.div key={stat.title} variants={itemVariants}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-500">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-green-500">{stat.change}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Sales Graph & Latest Orders (Staggered Animation) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Sales Graph */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Gráfico de Ventas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Gráfico aquí</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Latest Orders */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Últimos Pedidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-all duration-200"
                  >
                    <div>
                      <p className="font-medium">Pedido #{i + 1}</p>
                      <p className="text-sm text-gray-500">Hace 2 horas</p>
                    </div>
                    <span className="text-green-500 font-medium">$150</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
