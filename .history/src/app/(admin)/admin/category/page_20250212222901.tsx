const mockProducts = [
    { id: 1, name: 'Camiseta', price: 25, stock: 100 },
    { id: 2, name: 'Pantalón', price: 45, stock: 50 },
    { id: 3, name: 'Zapatos', price: 80, stock: 30 },
  ];
  
  export default function ProductsPage() {
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Productos</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Añadir Producto</button>
        </div>
        <div className="bg-white rounded shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Precio</th>
                <th className="px-4 py-2 text-left">Stock</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-2">{product.id}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">${product.price}</td>
                  <td className="px-4 py-2">{product.stock}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="text-blue-600">Editar</button>
                    <button className="text-red-600">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }