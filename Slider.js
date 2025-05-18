import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    "https://via.placeholder.com/600x400/FF6347/FFFFFF?text=Imagen+1",
    "https://via.placeholder.com/600x400/4682B4/FFFFFF?text=Imagen+2",
    "https://via.placeholder.com/600x400/32CD32/FFFFFF?text=Imagen+3",
    "https://via.placeholder.com/600x400/FFD700/FFFFFF?text=Imagen+4",
    "https://via.placeholder.com/600x400/6A5ACD/FFFFFF?text=Imagen+5"
];

export default function CarouselManual() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para cambiar de imagen
    const changeImage = (direction) => {
        if (direction === 'next') {
            setCurrentIndex((currentIndex + 1) % images.length);
        } else if (direction === 'prev') {
            setCurrentIndex((currentIndex - 1 + images.length) % images.length);
        }
    };

    // Cambio automático cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => changeImage('next'), 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
            <Card className="w-3/4 max-w-2xl overflow-hidden relative shadow-xl">
                <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className="w-full rounded-2xl" />
                <Button onClick={() => changeImage('prev')} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                    <ChevronLeft size={24} />
                </Button>
                <Button onClick={() => changeImage('next')} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                    <ChevronRight size={24} />
                </Button>
            </Card>
            <div className="mt-4 text-lg font-semibold">
                Imagen {currentIndex + 1} de {images.length}
            </div>
        </div>
    );
}
