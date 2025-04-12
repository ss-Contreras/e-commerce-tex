// src/app/account/profile/page.tsx
'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import Image from 'next/image';

export default function ProfilePage() {
    // Datos mockeados del usuario
    const user = {
        name: 'Sergio Contreras',
        email: 'sergio.contreras@example.com',
        phone: '+57 312 345 6789',
        address: 'Calle 123 #45-67, Bogotá, Colombia',
        avatar: '/images/avatars/user-1.jpg'
    };
    return (
        <div className="container px-4 mx-auto py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Mi Perfil</h1>

                <div className="grid md:grid-cols-[300px_1fr] gap-8">
                    {/* Columna Izquierda - Avatar y Acciones */}
                    <div className="space-y-6">
                        <Avatar className='relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="space-y-4">
                            <Button variant="outline" className="w-full">
                                Cambiar Foto
                            </Button>
                            <Button variant="outline" className="w-full">
                                Cambiar Contraseña
                            </Button>
                        </div>
                    </div>

                    {/* Columna Derecha - Información del Usuario */}
                    <div className="space-y-8">
                        {/* Sección de Información Personal */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-2xl font-semibold mb-6">Información Personal</h2>
                            <form className="space-y-4">
                                <div className="relative">
                                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        placeholder="Nombre completo"
                                        defaultValue={user.name}
                                        className="pl-10"
                                    />
                                </div>

                                <div className="relative">
                                    <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        defaultValue={user.email}
                                        className="pl-10"
                                    />
                                </div>

                                <div className="relative">
                                    <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        placeholder="Teléfono"
                                        defaultValue={user.phone}
                                        className="pl-10"
                                    />
                                </div>

                                <div className="relative">
                                    <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        placeholder="Dirección"
                                        defaultValue={user.address}
                                        className="pl-10"
                                    />
                                </div>

                                <Button className="w-fit">Guardar Cambios</Button>
                            </form>
                        </div>

                        {/* Sección de Seguridad */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-2xl font-semibold mb-6">Seguridad</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">Contraseña</h3>
                                    <p className="text-gray-600 mb-4">Última actualización: 15/03/2024</p>
                                    <Button variant="outline">Cambiar Contraseña</Button>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Autenticación de Dos Factores</h3>
                                    <p className="text-gray-600 mb-4">Añade una capa extra de seguridad</p>
                                    <Button variant="outline">Activar 2FA</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}