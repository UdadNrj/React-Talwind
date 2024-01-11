import React from 'react'

function ItemList() {
  const products = [
    {
      id: 1,
      name: 'Laptop UltraX',
      category: 'Electrónicos',
      image: 'https://img.freepik.com/premium-photo/laptop-with-data-analytics-isolated-black-background-generative-ai_175880-1511.jpg',
      price: 899.99,
      description: 'Potente laptop con procesador de última generación y gráficos de alta calidad.'
    },
    {
      id: 2,
      name: 'Smartphone Galaxy Pro',
      category: 'Electrónicos',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/es/feature/164134056/es-feature---532921476?$FB_TYPE_A_MO_JPG$',
      price: 549.99,
      description: 'Smartphone con cámara avanzada, pantalla AMOLED y rendimiento excepcional.'
    },
    {
      id: 3,
      name: 'Zapatillas Deportivas Elite',
      category: 'Ropa y Calzado',
      image: 'https://ae01.alicdn.com/kf/Se493644ca8eb4a3bb9cf2117a8f021e0Q.jpg_640x640Q90.jpg_.webp',
      price: 79.99,
      description: 'Zapatillas diseñadas para el rendimiento máximo en actividades deportivas.'
    },
    {
      id: 4,
      name: 'Libro Bestseller "Misterio Nocturno"',
      category: 'Libros',
      image: 'https://m.media-amazon.com/images/I/61UFOQDDKdL._AC_UF1000,1000_QL80_.jpg',
      price: 24.99,
      description: 'Emocionante novela de suspense que te mantendrá en vilo hasta la última página.'
    },
    {
      id: 5,
      name: 'Cámara DSLR Profesional',
      category: 'Electrónicos',
      image: 'https://es.digitaltrends.com/wp-content/uploads/2020/06/nikon-d780.jpg?p=1',
      price: 1299.99,
      description: 'Cámara de alta gama con sensor de imagen grande para fotografía profesional.'
    },
    {
      id: 6,
      name: 'Silla Ergonómica para Oficina',
      category: 'Muebles',
      image: 'https://benicolchon.com/wp-content/uploads/2020/12/Ambiente-Silla-KIEV_RGB_LOW.jpg',
      price: 149.99,
      description: 'Silla cómoda y ajustable diseñada para largas horas de trabajo en la oficina.'
    },
    {
      id: 7,
      name: 'Collar Elegante de Plata',
      category: 'Moda',
      image: 'https://bisuteriashop.com/7195-thickbox_default/collar-fina-y-elegante-de-plata-con-colgante-hoja-y-cristal-circonita.jpg',
      price: 49.99,
      description: 'Collar de plata fina con diseño elegante, perfecto para ocasiones especiales.'
    },
    {
      id: 8,
      name: 'Juego de Herramientas Profesionales',
      category: 'Hogar y Jardín',
      image: 'https://img.freepik.com/fotos-premium/conjunto-de-ferramentas-e-porcas-de-chave-de-cromo-vanadio-profissional-tema-industrial_203337-1612.jpg?w=2000',
      price: 129.99,
      description: 'Kit completo de herramientas de alta calidad para tareas de bricolaje y reparación.'
    },
    {
      id: 9,
      name: 'Mochila Resistente al Agua',
      category: 'Moda',
      image: 'https://img.ltwebstatic.com/images3_pi/2022/08/29/1661758696e3bb5c1ad3c2f633685eedef04af4abc_thumbnail_720x.jpg',
      price: 39.99,
      description: 'Mochila duradera con compartimentos multifuncionales y resistencia al agua.'
    },
    {
      id: 10,
      name: 'Juego de Mesa Estratégico "Dominio Total"',
      category: 'Juguetes y Juegos',
      image: 'https://ugi-games.com/wp-content/uploads/2024/01/16609-maldito-games-total-domination-juego-mesa-espanol.jpg',
      price: 34.99,
      description: 'Divertido juego de mesa que desafía tu estrategia y habilidades tácticas.'
    },
  ];
  return (
    <div>
      
      <div className='flex flex-wrap items-center justify-center'>
        {
          products.map((x) => (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 cursor hover:mas-w-md">
                <a href="#">
                    <img class="rounded-t-lg w-full" src={x.image} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{x.name}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{x.description}</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                       {x.price}
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ItemList 