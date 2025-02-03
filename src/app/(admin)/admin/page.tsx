'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { DataTable } from '@/components/DataTable';
import { recentOrders } from '@/data/mock';
import { products } from '@/lib/data/products';
import Image from 'next/image';
// import Link from 'next/link';



export default function AdminDashboard() {

  //   const clgg:(any () => {
  // console.log(first)
  //   }

  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'customer',
      header: 'Cliente',
    },
    {
      accessorKey: 'amount',
      header: 'Monto',
      cell: ({ row }: any) => `$${row.getValue('amount')}`
    },
    {
      accessorKey: 'status',
      header: 'Estado',
      cell: ({ row }: any) => (
        <span className={`px-2 py-1 rounded-full text-xs ${row.getValue('status') === 'Completado'
          ? 'bg-green-100 text-green-800'
          : row.getValue('status') === 'Pendiente'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-blue-100 text-blue-800'
          }`}>
          {row.getValue('status')}
        </span>
      )
    },
    {
      accessorKey: 'date',
      header: 'Fecha',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Resumen general del sistema</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Ventas Totales"
          value="$45,234"
          change="+12.5%"
        />
        <StatCard
          title="Pedidos Activos"
          value="2,345"
          change="+8.3%"
        />
        <StatCard
          title="Usuarios Registrados"
          value="1,234"
          change="+5.2%"
        />
        <StatCard
          title="Tasa de Conversión"
          value="3.6%"
          change="-2.1%"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Ventas Mensuales</CardTitle>
          </CardHeader>
          <CardContent className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Gráfico aquí</span>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle>Tráfico de Usuarios</CardTitle>
          </CardHeader>
          <CardContent className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Gráfico aquí</span>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Últimos Pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={recentOrders}
          />
        </CardContent>
      </Card>

      {/* Product Stock */}

      <Card className="p-6">
        <CardHeader>
          <CardTitle>Inventario de Productos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Image Display with Next.js Image component */}
                  <div className="w-12 h-12 bg-gray-100 rounded-lg">
                    <Image
                      src={product.image} // Use the image URL from the product data
                      alt={product.description} // Add alt text for accessibility
                      width={48} // Provide width for the image
                      height={48} // Provide height for the image
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{product.title}</h4>
                    <p className="text-sm text-gray-500">{product.sku}</p>
                  </div>
                </div>
                <Progress
                  value={(product.stock / product.totalStock) * 100}
                  className="w-48 bg-gray-100"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>


    </div>
  );
}

const StatCard = ({ title, value, change }: { title: string; value: string; change: string }) => (
  <Card className="p-6 transition-all hover:shadow-md">
    <CardHeader className="pb-4">
      <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-3xl font-bold">{value}</p>
      <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {change} vs último mes
      </p>
    </CardContent>
  </Card>
);