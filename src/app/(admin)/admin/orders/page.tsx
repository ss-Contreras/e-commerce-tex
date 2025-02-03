const mockOrders = [
    { id: '#1234', date: '2024-03-15', total: 150, status: 'Completado' },
    { id: '#1235', date: '2024-03-16', total: 85, status: 'Pendiente' },
  ];
  
  export default function OrdersPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Pedidos</h1>
        <div className="bg-white rounded shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Fecha</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className="px-4 py-2">${order.total}</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">{order.status}</span>
                  </td>
                  <td className="px-4 py-2">
                    <button className="text-blue-600">Ver Detalles</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }