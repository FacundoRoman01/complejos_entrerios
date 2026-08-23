import type {
  CandeUnit,
  ComplejoSummary,
  FaqItem,
  GalleryImage,
  LomaCabin,
  Testimonial,
} from '../types';
import * as img from './images';

export const heroHomeSlides: string[] = [
  img.HERO_HOME_SLIDE_1,
  img.HERO_HOME_SLIDE_2,
  img.HERO_HOME_SLIDE_3,
  img.HERO_HOME_SLIDE_4,
];

export const complejoSummaries: ComplejoSummary[] = [
  {
    id: 'laloma',
    name: 'Cabañas La Loma',
    cabinCountLabel: '5 cabañas',
    images: [img.LOMA_1, img.LOMA_2, img.LOMA_3],
    accentTextColor: '#c3d19a',
    gradientFrom: 'rgba(24,34,16,0.94)',
    gradientMid: 'rgba(44,60,32,0.5)',
    cardBg: '#20291a',
    shadowColor: 'rgba(124,138,78,0.45)',
  },
  {
    id: 'cande',
    name: 'Bungalows Cande',
    cabinCountLabel: '3 cabañas',
    images: [img.CANDE_1, img.CANDE_2, img.CANDE_3],
    accentTextColor: '#a9d3d6',
    gradientFrom: 'rgba(12,32,38,0.94)',
    gradientMid: 'rgba(20,55,64,0.5)',
    cardBg: '#12303a',
    shadowColor: 'rgba(111,160,164,0.45)',
  },
  {
    id: 'arandu',
    name: 'Cabaña Arandú',
    cabinCountLabel: '1 cabaña',
    images: [img.ARANDU_1, img.ARANDU_2, img.ARANDU_3],
    accentTextColor: '#dcc79a',
    gradientFrom: 'rgba(24,18,10,0.94)',
    gradientMid: 'rgba(60,45,25,0.5)',
    cardBg: '#181510',
    shadowColor: 'rgba(193,168,119,0.45)',
  },
];

export const lomaCabins: LomaCabin[] = [
  {
    name: 'Cabaña 1',  // listooo
    eyebrow: 'Ideal para familias y amigos.',
    img: img.LOMA_CABANA_1,
    gallery: [img.LOMA_CABANA_CARD_1,img.LOMA_CABANA_CARD_2,img.LOMA_CABANA_CARD_3,img.LOMA_CABANA_CARD_4,img.LOMA_CABANA_CARD_5,img.LOMA_CABANA_CARD_6],
    pin: 'Se encuentra a 10 cuadras del centro.',
    capacidad: '4 personas',
    ambientes: 'Monoambiente',
    dormitorios: 'Cama matrimonial + cama marinera',
    banos: '1',
    specs: '4 personas · Monoambiente',
    desc: 'Cabaña monoambiente con amplio patio, ideal para relajarse y disfrutar de la tranquilidad del entorno. Cuenta con una cama matrimonial y una cama marinera, ofreciendo comodidad para una estadía en pareja o en familia.',
    distintivo: ['Bañera en el dormitorio principal', 'Quincho cerrado con parrilla', 'Jardín privado y entrada para auto'],
    comodidades: ['Ropa blanca (deben traer toallas)', 'Wi-Fi', 'Vajilla', 'Parrilla', 'Garage semicubierto', ' 2 piletas (una techada y otra al aire libre) que comparten con el complejo'],
    dormir: '¿Sabías que alojándote en nuestro complejo tenés beneficios en la entrada del Parque Termal y en diferentes comercios de la ciudad?',
    tags: ['Wi-Fi', 'Parrilla' , 'Más...'],
  },
  {
    name: 'Cabaña 2',  //listoooo
    eyebrow: 'Ideal para familias y amigos.',
    img: img.LOMA_CABANA_2,
    gallery: [img.LOMA_CABANA2_CARD_1,img.LOMA_CABANA2_CARD_2,img.LOMA_CABANA2_CARD_3,img.LOMA_CABANA2_CARD_4,img.LOMA_CABANA2_CARD_5,img.LOMA_CABANA2_CARD_6,img.LOMA_CABANA2_CARD_7,img.LOMA_CABANA2_CARD_8,img.LOMA_CABANA2_CARD_9,img.LOMA_CABANA2_CARD_10,img.LOMA_CABANA2_CARD_11,img.LOMA_CABANA2_CARD_12,img.LOMA_CABANA2_CARD_13,img.LOMA_CABANA2_CARD_14,img.LOMA_CABANA2_CARD_15,img.LOMA_CABANA2_CARD_16,img.LOMA_CABANA2_CARD_17,img.LOMA_CABANA2_CARD_18,img.LOMA_CABANA2_CARD_19,img.LOMA_CABANA2_CARD_20,img.LOMA_CABANA2_CARD_21],
    pin: ' Se encuentra a 10 cuadras del centro.',
    capacidad: '4 personas · Monoambiente',
    ambientes: 'Monoambiente',
    dormitorios: 'Cama matrimonial + cama marinera',
    banos: '1',
    specs: '4 personas · Monoambiente',
    desc: 'Cabaña monoambiente con amplio patio, ideal para relajarse y disfrutar de la tranquilidad del entorno. Cuenta con una cama matrimonial y una cama marinera, ofreciendo comodidad para una estadía en pareja o en familia.',
    distintivo: ['[Distintivo 1]', '[Distintivo 2]', '[Distintivo 3]'],
    comodidades: ['Ropa blanca (deben traer toallas)', 'Vajilla', 'Parrilla', ' Garage semicubierto',' Aire acondicionado', ' Televisión',' Wifi',' 2 piletas (una techada y otra al aire libre) que comparten con el complejo'],
    dormir: '¿Sabías que alojándote en nuestro complejo tenés beneficios en la entrada del Parque Termal y en diferentes comercios de la ciudad?',
    tags: [' Televisión', 'Garage semicubierto','Más...'],
  },
  {
    name: 'Cabaña 3', //listoooo
    eyebrow: 'Ideal para familias y amigos.',
    img: img.LOMA_CABANA_3,
    gallery: [img.LOMA_CABANA3_CARD_1,img.LOMA_CABANA3_CARD_2,img.LOMA_CABANA3_CARD_3,img.LOMA_CABANA3_CARD_4,img.LOMA_CABANA3_CARD_5,img.LOMA_CABANA3_CARD_6,img.LOMA_CABANA3_CARD_7,img.LOMA_CABANA3_CARD_8,img.LOMA_CABANA3_CARD_9,img.LOMA_CABANA3_CARD_10,img.LOMA_CABANA3_CARD_11,img.LOMA_CABANA3_CARD_12,img.LOMA_CABANA3_CARD_13,img.LOMA_CABANA3_CARD_14],
    pin: 'Se encuentra a 10 cuadras del centro.',
    capacidad: 'Hasta 5 personas · 2 dormitorios',
    ambientes: '3',
    dormitorios: '2 (dos camas matrimoniales y una cama individual)',
    banos: '1',
    specs: 'Hasta 5 personas · 2 dormitorios',
    desc: 'Cabaña de estilo rústico, ideal para hasta 5 personas. Cuenta con dos habitaciones, dos camas matrimoniales y una cama individual, además dispone de parrilla para disfrutar de comidas y momentos al aire libre.',
    distintivo: ['[Distintivo 1]', '[Distintivo 2]', '[Distintivo 3]'],
    comodidades: ['Ropa blanca (deben traer toallas)', 'Vajilla', 'Parrilla', ' Garage semicubierto',' Aire acondicionado', ' Televisión',' Wifi',' 2 piletas (una techada y otra al aire libre) que comparten con el complejo'],
    dormir: '¿Sabías que alojándote en nuestro complejo tenés beneficios en la entrada del Parque Termal y en diferentes comercios de la ciudad?',
    tags: [' Parrilla', 'Wifi','Más...'],
  },
  {
    name: 'Cabaña 4',  //LISTOOOO
    eyebrow: 'Ideal para familias y amigos.',
    img: img.LOMA_CABANA_4,
    gallery: [img.LOMA_CABANA4_CARD_1,img.LOMA_CABANA4_CARD_2,img.LOMA_CABANA4_CARD_3,img.LOMA_CABANA4_CARD_4,img.LOMA_CABANA4_CARD_5,img.LOMA_CABANA4_CARD_6,img.LOMA_CABANA4_CARD_7,img.LOMA_CABANA4_CARD_8,img.LOMA_CABANA4_CARD_9,img.LOMA_CABANA4_CARD_10,img.LOMA_CABANA4_CARD_11,img.LOMA_CABANA4_CARD_12,img.LOMA_CABANA4_CARD_13,img.LOMA_CABANA4_CARD_14,img.LOMA_CABANA4_CARD_15],
    pin: 'Se encuentra a 10 cuadras del centro.',
    capacidad: 'Hasta 4 personas',
    ambientes: '3',
    dormitorios: '2 (cama matrimonial en una habitación y dos camas individuales en la otra)',
    banos: '1',
    specs: 'Hasta 4 personas · 2 dormitorios',
    desc: 'Cabaña para hasta 4 personas. Cuenta con dos habitaciones: una con cama matrimonial y otra con dos camas individuales, ideal para disfrutar de una estadía tranquila y confortable.',
    distintivo: ['[Distintivo 1]', '[Distintivo 2]', '[Distintivo 3]'],
    comodidades: ['Ropa blanca (deben traer toallas)', 'Vajilla', 'Parrilla', ' Garage semicubierto',' Aire acondicionado', ' Televisión',' Wifi',' 2 piletas (una techada y otra al aire libre) que comparten con el complejo'],
    dormir: '¿Sabías que alojándote en nuestro complejo tenés beneficios en la entrada del Parque Termal y en diferentes comercios de la ciudad?',
    tags: ['  Garage semicubierto', 'Wifi','Más...'],
  },
  {
    name: 'Cabaña 5', //listoooo
    eyebrow: 'Ideal para familias y amigos.',
    img: img.LOMA_CABANA_5,
    gallery: [img.LOMA_CABANA5_CARD_1,img.LOMA_CABANA5_CARD_2,img.LOMA_CABANA5_CARD_3,img.LOMA_CABANA5_CARD_4,img.LOMA_CABANA5_CARD_5,img.LOMA_CABANA5_CARD_6,img.LOMA_CABANA5_CARD_7,img.LOMA_CABANA5_CARD_8,img.LOMA_CABANA5_CARD_9,img.LOMA_CABANA5_CARD_10,img.LOMA_CABANA5_CARD_11,img.LOMA_CABANA5_CARD_12,img.LOMA_CABANA5_CARD_13,img.LOMA_CABANA5_CARD_14,img.LOMA_CABANA5_CARD_15,img.LOMA_CABANA5_CARD_16,img.LOMA_CABANA5_CARD_17],
    pin: '[Ubicación dentro del complejo]',
    capacidad: 'Hasta 4 personas',
    ambientes: '3',
    dormitorios: '2 (una con cama matrimonial y otra con dos camas individuales)',
    banos: '1',
    specs: 'Hasta 4 personas · 2 dormitorios',
    desc: 'Ecomódulo para hasta 4 personas, con dos habitaciones, una cama matrimonial y dos camas individuales. Cuenta con un amplio patio, ideal para disfrutar del aire libre y la tranquilidad del entorno.',
    distintivo: ['[Distintivo 1]', '[Distintivo 2]', '[Distintivo 3]'],
     comodidades: ['Ropa blanca (deben traer toallas)', 'Vajilla', 'Parrilla', ' Garage semicubierto',' Aire acondicionado', ' Televisión',' Wifi',' 2 piletas (una techada y otra al aire libre) que comparten con el complejo'],
    dormir: '¿Sabías que alojándote en nuestro complejo tenés beneficios en la entrada del Parque Termal y en diferentes comercios de la ciudad?',
    tags: ['  Aire acondicionado', 'Vajilla','Más...'],
  },
];

export const candeUnits: CandeUnit[] = [
  {
    name: 'Cabaña 1', //listooooo
    cap: 'Hasta 4 personas',
    eyebrow: 'Ideal para pareja, familia y amigos',
    img: img.CANDE_UNIT_1,
    gallery: [img.CANDE_CABANA5_CARD_1,img.CANDE_CABANA5_CARD_2,img.CANDE_CABANA5_CARD_3,img.CANDE_CABANA5_CARD_4,img.CANDE_CABANA5_CARD_5,img.CANDE_CABANA5_CARD_6,img.CANDE_CABANA5_CARD_7,img.CANDE_CABANA5_CARD_8,img.CANDE_CABANA5_CARD_9,img.CANDE_CABANA5_CARD_10,img.CANDE_CABANA5_CARD_11,img.CANDE_CABANA5_CARD_12],
    pin: 'Camino a las Termas.',
    capacidad: 'Hasta 4 personas',
    ambientes: '3',
    dormitorios: '2 (una con cama matrimonial y otra con dos camas individuales)',
    banos: '1',
    desc: 'Bungalow para hasta 4 personas, con dos dormitorios y un espacio confortable para disfrutar de una estadía tranquila. Cuenta con parrilla techada propia y acceso a la pileta climatizada cubierta del complejo.',
    distintivo: ['[Distintivo 1]', '[Distintivo 2]', '[Distintivo 3]'],
    comodidades: ['Ropa blanca (deben traer toallas)', 'Vajilla', 'Lavarropa', '  Garage cerrado e individual por bungalow',' Aire acondicionado', ' Televisión por cable',' Wifi',' 2 piletas (una techada y otra al aire libre) que comparten con el complejo',' Caja de seguridad',' Parrilla techada' , ' Microondas'],
    dormir: '[Detalle de camas y capacidad para dormir.]',
  },
  {
    name: 'Cabaña 2', //LISTOOOO
    cap: 'Hasta 4 personas',
    eyebrow: 'Ideal para pareja, familia y amigos',
    img: img.CANDE_UNIT_2,
    gallery: [img.CANDE_CABANA6_CARD_1,img.CANDE_CABANA6_CARD_2,img.CANDE_CABANA6_CARD_3,img.CANDE_CABANA6_CARD_4,img.CANDE_CABANA6_CARD_5,img.CANDE_CABANA6_CARD_6,img.CANDE_CABANA6_CARD_7,img.CANDE_CABANA6_CARD_8,img.CANDE_CABANA6_CARD_9],
    pin: ' Camino a las Termas.',
    capacidad: 'Hasta 4 personas',
    ambientes: '2',
    dormitorios: '1 habitación con cama matrimonial + 2 camas individuales en el comedor',
    banos: '1',
    desc: 'Bungalow ideal para hasta 4 personas, combina comodidad y espacios para disfrutar al aire libre. Su parrilla techada y el acceso a la pileta climatizada cubierta hacen de cada estadía una experiencia de descanso y relax.',
    distintivo: ['[Distintivo 1]', '[Distintivo 2]', '[Distintivo 3]'],
    comodidades: ['Ropa blanca (deben traer toallas)', 'Vajilla', 'Lavarropa', '  Garage cerrado e individual por bungalow',' Aire acondicionado en todos los ambientes', ' Televisión por cable',' Wifi',' 2 piletas (una techada y otra al aire libre) que comparten con el complejo',' Caja de seguridad',' Parrilla techada' , ' Microondas'],
    dormir: '¿Sabías que alojándote en nuestro complejo tenés beneficios en la entrada del Parque Termal y en diferentes comercios de la ciudad?',
  },
  {
    name: 'Cabaña 3', //listooo
    cap: 'Hasta 4 personas',
    eyebrow: 'Ideal para pareja, familia y amigos',
    img: img.CANDE_UNIT_3,
    gallery: [img.CANDE_CABANA7_CARD_1,img.CANDE_CABANA7_CARD_2,img.CANDE_CABANA7_CARD_3,img.CANDE_CABANA7_CARD_4,img.CANDE_CABANA7_CARD_5,img.CANDE_CABANA7_CARD_6,img.CANDE_CABANA7_CARD_7,img.CANDE_CABANA7_CARD_8,img.CANDE_CABANA7_CARD_9],
    pin: ' Camino a las Termas.',
    capacidad: 'Hasta 4 personas',
    ambientes: '2',
    dormitorios: '1 habitación con cama matrimonial + 2 camas individuales en el comedor',
    banos: '1',
    desc: 'Bungalow con capacidad para hasta 4 personas, pensado para disfrutar de una estadía confortable. Cuenta con parrilla techada propia y acceso a la pileta climatizada cubierta del complejo.',
    distintivo: ['[Distintivo 1]', '[Distintivo 2]', '[Distintivo 3]'],
     comodidades: ['Ropa blanca (deben traer toallas)', 'Vajilla', 'Lavarropa', '  Garage cerrado e individual por bungalow',' Aire acondicionado en todos los ambientes', ' Televisión por cable',' Wifi',' 2 piletas (una techada y otra al aire libre) que comparten con el complejo',' Caja de seguridad',' Parrilla techada' , ' Microondas'],
    dormir: '¿Sabías que alojándote en nuestro complejo tenés beneficios en la entrada del Parque Termal y en diferentes comercios de la ciudad?',
  },
];

const baseTestimonialsLoma: Testimonial[] = [
  { title: 'Un fin de semana perfecto', content: '[Testimonio del huésped — su experiencia general en La Loma. Completar con reseña real.]', tag: 'Familia', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'Naturaleza y descanso', content: '[Testimonio — lo que más disfrutaron del entorno y las piletas.]', tag: 'Pareja', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'Volvemos seguro', content: '[Testimonio — por qué elegirían La Loma de nuevo.]', tag: 'Amigos', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'Atención impecable', content: '[Testimonio — sobre la atención y las comodidades.]', tag: 'Familia', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'Ideal para desconectar', content: '[Testimonio — la calma y el verde del lugar.]', tag: 'Pareja', name: '[Nombre]', role: '[Mes / Año]' },
];
export const testimonialsLoma: Testimonial[] = [...baseTestimonialsLoma, ...baseTestimonialsLoma];

const baseTestimonialsArandu: Testimonial[] = [
  { title: 'Privacidad total', content: '[Testimonio — la experiencia de tener la cabaña entera para uno, junto al arroyo.]', tag: 'Pareja', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'El arroyo lo es todo', content: '[Testimonio — el sonido del agua y el entorno natural.]', tag: 'Escapada', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'Desconexión real', content: '[Testimonio — cómo lograron desconectar del mundo.]', tag: 'Pareja', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'Volvemos sin dudarlo', content: '[Testimonio — por qué elegirían Arandú otra vez.]', tag: 'Aniversario', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'Un refugio perfecto', content: '[Testimonio — el confort de la cabaña y la calma del lugar.]', tag: 'Escapada', name: '[Nombre]', role: '[Mes / Año]' },
];
export const testimonialsArandu: Testimonial[] = [...baseTestimonialsArandu, ...baseTestimonialsArandu];

const baseTestimonialsCande: Testimonial[] = [
  { title: 'Comodidad total', content: '[Testimonio — lo cómodas y equipadas que están las cabañas.]', tag: 'Pareja', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'La pileta climatizada', content: '[Testimonio — disfrutar del agua templada en cualquier época del año.]', tag: 'Familia', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'Volvemos seguro', content: '[Testimonio — por qué elegirían Bungalows Cande otra vez.]', tag: 'Escapada', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'Atención impecable', content: '[Testimonio — el trato y la predisposición de los anfitriones.]', tag: 'Pareja', name: '[Nombre]', role: '[Mes / Año]' },
  { title: 'Descanso asegurado', content: '[Testimonio — la tranquilidad y el confort del complejo.]', tag: 'Familia', name: '[Nombre]', role: '[Mes / Año]' },
];
export const testimonialsCande: Testimonial[] = [...baseTestimonialsCande, ...baseTestimonialsCande];

export const aranduGallery: GalleryImage[] = [
  { src: img.ARANDU_GALLERY_HAMACA, alt: 'Arandú · hamaca junto al río' },
  // { src: img.ARANDU_GALLERY_AFRAME, alt: 'Arandú · cabaña A-frame' },
  { src: img.ARANDU_GALLERY_DORMITORIO, alt: 'Arandú · dormitorio' },
  { src: img.ARANDU_GALLERY_BAÑO, alt: 'Arandú · BAÑO' },
  { src: img.ARANDU_GALLERY_LIVING, alt: 'Arandú · living comedor' },
    { src: img.ARANDU_GALLERY_PIEZA, alt: 'Arandú · living comedor' },
     { src: img.ARANDU_GALLERY_LIVING2, alt: 'Arandú · PIEZa' },
  { src: img.ARANDU_1, alt: 'Arandú · entorno natural' },
  { src: img.ARANDU_2, alt: 'Arandú · deck sobre el agua' },
  { src: img.ARANDU_2_ALT, alt: 'Arandú · deck sobre el río' },
  // { src: img.ARANDU_GALLERY_AFRAME, alt: 'Arandú · exterior de la cabaña' },
];

export const aranduBeneficios: string[] = [
  'Ropa de blanco (toallas deben traer)',
  'Aire acondicionado',
  'Vajilla',
  'Wi-Fi',
  'Garage techado',
  'Ropa de cama y toallas',
  'Parrilla y horno de barro',
  'Estacionamiento privado',
  'Lavarropa',
  'Cocina con heladera',
  'Secador de pelo',
  'Televisión',
  'Microondas',
];

export const faqs: FaqItem[] = [
  { q: '¿Qué medios de pago aceptan?', a: 'Aceptamos efectivo, transferencia bancaria y tarjetas de débito y crédito.' },
  { q: '¿Se solicita una seña para confirmar la reserva?', a: 'Sí. Para confirmar la reserva se solicita una seña equivalente al valor de una noche de alojamiento.' },
  { q: '¿Se admiten mascotas?', a: 'Sí, aceptamos mascotas pequeñas y educadas. Si viajás con tu mascota, te recomendamos consultarnos previamente.' },
  { q: '¿Cuál es la estadía mínima?', a: 'La estadía mínima puede variar según la época del año. Consultanos tus fechas y te informaremos la disponibilidad y las condiciones para ese período.' },
  { q: '¿Las cabañas están equipadas para cocinar?', a: 'Sí, las cabañas cuentan con el equipamiento necesario para cocinar.' },
];
