import respiraVerdeImage from '../../imagenes/respira_verde_fondo.png'
import cultivaTradicionImage from '../../imagenes/cultiva_tradicion.webp'
import nochesEstrelladasImage from '../../imagenes/cautiva_miradas.png'
import pucaraImage from '../../imagenes/respira_aconquija2.webp'
import cristoRedentorImage from '../../imagenes/cristo_redentor/cristo_redentor.webp'
import bosqueAlisosImage from '../../imagenes/bosque_de_alisos/bosque.webp'
import virgenValleImage from '../../imagenes/virgen_del_valle/virgen_del_valle.webp'
import balnearioImage from '../../imagenes/balneario_municipal/balneario_5.webp'
import tunelesImage from '../../imagenes/tuneles.webp'
import veranoImage from '../../imagenes/verano.webp'
import otonoImage from '../../imagenes/otoño.jpg'
import inviernoImage from '../../imagenes/invierno.webp'
import primaveraImage from '../../imagenes/primavera.webp'

export const seasons = [
  { id: 'verano', label: 'Verano', dates: 'Diciembre — Marzo', title: 'Días largos', text: 'Ríos cristalinos, montañas imponentes, senderos que invitan a descubrir la naturaleza y paisajes que renuevan el alma. Un destino donde cada rincón se convierte en una experiencia inolvidable.', image: veranoImage, alt: 'Verano en Aconquija' },
  { id: 'otono', label: 'Otoño', dates: 'Abril — Junio', title: 'El bosque se enciende', text: 'Los colores ocres y rojizos cubren las laderas. Las noches empiezan a refrescar y el cielo se vuelve más nítido para mirar estrellas.', image: otonoImage, alt: 'Otoño en Aconquija' },
  { id: 'invierno', label: 'Invierno', dates: 'Julio — Septiembre', title: 'Picos nevados, aire quieto', text: 'La nieve cubre las cumbres y el silencio se hace total. Ideal para fotografía de paisaje y para quienes buscan desconectar de verdad.', image: inviernoImage, alt: 'Invierno en Aconquija' },
  { id: 'primavera', label: 'Primavera', dates: 'Septiembre — Noviembre', title: 'La sierra florece', text: 'El deshielo despierta arroyos y la vegetación de altura vuelve a brotar. Días templados, perfectos para los senderos más largos.', image: primaveraImage, alt: 'Primavera en Aconquija' },
]

export const circuitCards = [
  { path: '/circuitos/respira-verde', image: respiraVerdeImage, alt: 'Nevados del Aconquija' },
  { path: '/circuitos/cultiva-tradicion', image: cultivaTradicionImage, alt: 'Cabalgatas' },
  { path: '/lugares/planetario-janaxpacha-huasi', image: nochesEstrelladasImage, alt: 'Cielo estrellado' },
  { path: '/lugares/pucara-de-aconquija', image: pucaraImage, alt: 'Paisajes de Aconquija' },
]

export const places = [
  { path: '/lugares/cristo-redentor', name: 'Cristo Redentor', image: cristoRedentorImage, alt: 'Mirador del Aconquija', description: '' },
  { path: '/lugares/bosque-de-alisos', name: 'Bosque de Alisos', image: bosqueAlisosImage, alt: 'Bosque andino', description: 'Deja que la naturaleza te sorprenda en cada sendero de Los Alisos.' },
  { path: '/lugares/virgen-del-valle', name: 'Virgen Del Valle', image: virgenValleImage, alt: 'Virgen', description: '' },
  { path: '/lugares/balneario-municipal-buena-vista', name: 'Balneario Municipal', image: balnearioImage, alt: 'Pueblo', description: '' },
  { path: '/lugares/tuneles-del-rio-potrero', name: 'Los tuneles', image: tunelesImage, alt: 'Amanecer en la sierra', description: 'Adentrate en los tuneles de Yunca y descubrí un recirrido único, donde la naturaleza y el misterio se encuntran.' },
]
