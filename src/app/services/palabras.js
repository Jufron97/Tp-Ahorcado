const FACILES = [
   { palabra: 'perro', pista: 'Mamifero, 4 patas.' },
   { palabra: 'casa', pista: 'Tiene puerta y ventanas.' },
   { palabra: 'cascada', pista: 'Hay una en Iguazú... también en el Niagara.' },
   { palabra: 'amor', pista: 'Lo que se siente cuando se quiere mucho a alguien.' },
   { palabra: 'gato', pista: 'Mamifero, 4 patas.' },
   { palabra: 'buzo', pista: 'Prenda de vestir de invierno' },
   { palabra: 'lechuga', pista: 'Es una verdura muy usada para las ensaladas.' },
   { palabra: 'madera', pista: 'Viene del arbol y se puede hacer mesas.' },
   { palabra: 'caracol', pista: 'Ser vivo que lleva a su casa en todo viaje.' },
   { palabra: 'tenedor', pista: 'Se usa para comer' },
   { palabra: 'araña', pista: 'Tiene 8 patas' },
   { palabra: 'elefante', pista: 'Mamífero terrestre más grande.' },
   { palabra: 'soldado', pista: 'Va a la guerra y lucha por su país.' },
   { palabra: 'reloj', pista: 'Se usa para ver la hora' },
   { palabra: 'sombrero', pista: 'Se lo usa en la cabeza' }, //#15
   { palabra: 'pera', pista: 'Si querés que te diga una pista, espera.' },
   { palabra: 'tentaculo', pista: 'los pulpos tienen 8' },
   { palabra: 'estrella', pista: 'Aparecen muchas en la noche' },
   { palabra: 'escarapela', pista: 'Color celeste y blanca y se prende en la ropa' },
   { palabra: 'anteojo', pista: 'Sirven para ver mejor' },
   { palabra: 'agenda', pista: 'Donde anotás lo que vas a hacer en los próximos días' },
   { palabra: 'bicicleta', pista: 'Transporte de dos ruedas a pedal' },
   { palabra: 'guitarra', pista: 'Instrumento de cuerda para cantar payadas' },
   { palabra: 'soledad', pista: 'Cuando te sentís sólo' },
   { palabra: 'biblioteca', pista: 'Donde se guardan muchos libros' },
   { palabra: 'piano', pista: 'Instrumento con teclas blancas y negras' },
   { palabra: 'escoba', pista: 'Para barrer. Y si conseguís 15, ganás' },
   { palabra: 'botella', pista: 'Contenedor plático para contener agua' },
   { palabra: 'heladera', pista: 'Donde siempre está frío para las comidas' },
   { palabra: 'zorro', pista: 'Era un héroe que escribía una z con su espada' },
   { palabra: 'pasado', pista: 'Antes del ahora' },
   {
      palabra: 'sistema',
      pista: 'Puede ser solar, digestivo, contable, de información y mucho más',
   },
   { palabra: 'historia', pista: 'Es lo que te cuentan sobre lo que ya pasó' },
   { palabra: 'realidad', pista: 'Cualquier similitud con la ... es pura coincidencia' },
   { palabra: 'abuelo', pista: 'padre de mi padre' },
   { palabra: 'nosotros', pista: 'No es ellos, no es ustedes' },
   { palabra: 'derecho', pista: 'cuando no está torcido' },
   { palabra: 'cabeza', pista: 'Tiene ojos, boca, nariz y orejas' },
   { palabra: 'tierra', pista: 'se le dice al suelo y a nuestro planeta' },
   { palabra: 'policia', pista: 'Persona que mantiene el orden y la seguridad' },
   { palabra: 'supermercado', pista: 'Donde se hacen las compras' },
   { palabra: 'caramelo', pista: 'Hay masticables o duros y son dulces' },
   { palabra: 'nacional', pista: 'Que pertenece a este país' },
   { palabra: 'empresa', pista: 'Donde se venden bienes o servicios' },
   { palabra: 'puerta', pista: 'Para entrar a un lugar, tenés que pasar a través de esto' }, //#45
   { palabra: 'bote', pista: 'Medio de transporte maritimo.' },
   { palabra: 'nadar', pista: 'Es lo que hacemos para no ahogarnos.' },
   { palabra: 'ventana', pista: 'La abro cuando tengo calor, la cierro cuando tengo frio.' },
   { palabra: 'escalera', pista: 'Herramienta para llegar a lugares altos.' },
   { palabra: 'taza', pista: 'Donde me sirvo el café.' },
];
const MEDIAS = [
   { palabra: 'persona', pista: 'Todos lo somos.' },
   {
      palabra: 'exploradora',
      pista: 'Una persona que le gusta conocer muchos lugares y vivir nuevas experiencias.',
   },
   {
      palabra: 'calculadora',
      pista: 'Herramienta util, especialmente para contadores e ingenieros.',
   },
   { palabra: 'computadora', pista: 'Indispensable para todo ingeniero en sistemas.' },
   { palabra: 'copa', pista: 'Elemento utilizado normalmente para beber.' },
   { palabra: 'acero', pista: 'Material utilizado para la construcción.' },
   { palabra: 'esponja', pista: 'Se encuentra en el mar, en la cocina y en el baño.' },
   { palabra: 'ahorcado', pista: 'El juego que estás jugando se llama así.' },
   { palabra: 'sombrilla', pista: 'Se usa principalmente en la playa.' },
   {
      palabra: 'entrevista',
      pista: 'Dialogo entre dos o mas personas, en la cual una hace preguntas.',
   },
   { palabra: 'pizarron', pista: 'En ella se escribe con tiza o marcador.' },
   { palabra: 'rinoceronte', pista: 'Animal que tiene un cuerno' },
   { palabra: 'extremista', pista: 'Persona que realiza actividades extremas.' },
   { palabra: 'estadio', pista: 'Vas para ver un partido de futbol.' },
   { palabra: 'chocolate', pista: 'Está hecho a base de cacao.' }, //#15
   { palabra: 'serrucho', pista: 'Con esto podés dividir la madera en dos partes' },
   { palabra: 'tactica', pista: 'Forma de jugar en base a una estrategia' },
   { palabra: 'magenta', pista: 'Uno de los principales colores de la luz' },
   { palabra: 'invisible', pista: 'Que no se ve' },
   { palabra: 'granada', pista: 'Es una fruta y un explosivo' },
   { palabra: 'exprimir', pista: 'Cuando sacamos jugo a algo' },
   { palabra: 'gargola', pista: 'Monstruo de cemento, común en los edificios' },
   { palabra: 'fosforo', pista: 'Con esto tenés fuego al instante' },
   { palabra: 'alcohol', pista: 'Cerveza, vino, champaña, licor, whisky' },
   { palabra: 'reciclar', pista: 'Reducir, reutilizar, ...' },
   { palabra: 'infancia', pista: 'Época de niñez' },
   { palabra: 'incision', pista: 'Corte sobre una superficie' },
   { palabra: 'revertir', pista: 'Volver para atrás alguna acción' },
   { palabra: 'fascinante', pista: 'Algo que genera asombro, que fascina' },
   { palabra: 'estribillo', pista: 'Parte de una poesía o canción' }, //#30
   { palabra: 'omnibus', pista: 'Para viajar de un lugar junto a varias personas' },
   { palabra: 'ciudad', pista: 'Poblado donde habitan muchas personas' },
   { palabra: 'agua', pista: 'Compuesto fundamental para la vida' },
   { palabra: 'cuerpo', pista: 'Todo lo que ocupe volumen' },
   { palabra: 'problema', pista: 'Si busco un asolución, es porque tengo uno de estos' },
   { palabra: 'quiosco', pista: 'Donde voy a comprar los caramelos' },
   { palabra: 'debilidad', pista: 'Tengo una fortaleza, pero también tengo una ...' },
   { palabra: 'concluir', pista: 'Terminar algo que se estaba haciendo' },
   { palabra: 'catorce', pista: 'Es un número' },
   { palabra: 'observacion', pista: 'Cuando me pongo a mirar algo con detenimiento' },
   { palabra: 'colaborador', pista: 'Aquel que ayuda en algo' },
   { palabra: 'nuboso', pista: 'Cuando hay muchas nubes' },
   { palabra: 'levantar', pista: 'Subir algo' },
   { palabra: 'soltar', pista: 'Me cansé de tener esto, entonces lo voy a ...' },
   { palabra: 'remodelar', pista: 'Esta casa está muy fea. La voy a ...' },
   {
      palabra: 'almohada',
      pista: 'Todos tenemos una, por mas que no nos guste usarla a la hora de dormir',
   },
   { palabra: 'taxi', pista: 'Medio de transporte' },
   { palabra: 'luz', pista: 'Es necesaria para ver' },
   { palabra: 'ballena', pista: 'Animal gigante acuatico.' },
   { palabra: 'arcilla', pista: 'Se usa para moldear, tambien para hacer jarrones.' }, //50
];

// Las palabras dificiles no muestran pistas.
const DIFICILES = [
   { palabra: 'espiraculo', pista: '' },
   { palabra: 'hechiceria', pista: '' },
   { palabra: 'kiwi', pista: '' },
   { palabra: 'coma', pista: '' },
   { palabra: 'dificultad', pista: '' },
   { palabra: 'nomenclatura', pista: '' },
   { palabra: 'esqueje', pista: '' },
   { palabra: 'vicisitud', pista: '' },
   { palabra: 'pristino', pista: '' },
   { palabra: 'esceptico', pista: '' },
   { palabra: 'ignominia', pista: '' },
   { palabra: 'alborozo', pista: '' },
   { palabra: 'endilgar', pista: '' },
   { palabra: 'aversion', pista: '' },
   { palabra: 'languidez', pista: '' },
   { palabra: 'intemperie', pista: '' },
   { palabra: 'daguerrotipo', pista: '' },
   { palabra: 'putrefacto', pista: '' },
   { palabra: 'occiso', pista: '' },
   { palabra: 'vacuidad', pista: '' },
   { palabra: 'arcabuco', pista: '' },
   { palabra: 'ominoso', pista: '' },
   { palabra: 'demagogia', pista: '' },
   { palabra: 'halterofilia', pista: '' },
   { palabra: 'aborrecer', pista: '' },
   { palabra: 'occiso', pista: '' },
   { palabra: 'triduano', pista: '' },
   { palabra: 'contumaz', pista: '' },
   { palabra: 'cohibir', pista: '' },
   { palabra: 'andariego', pista: '' },
   { palabra: 'ruborizar', pista: '' },
   { palabra: 'yuxtaponer', pista: '' },
   { palabra: 'obstinado', pista: '' },
   { palabra: 'magnanimidad', pista: '' },
   { palabra: 'infamia', pista: '' },
   { palabra: 'borrajear', pista: '' },
   { palabra: 'doctrina', pista: '' },
   { palabra: 'apaciguar', pista: '' },
   { palabra: 'arquetipo', pista: '' },
   { palabra: 'atrocidad', pista: '' },
   { palabra: 'corromper', pista: '' },
   { palabra: 'sonsacar', pista: '' },
   { palabra: 'discernir', pista: '' },
   { palabra: 'escatimar', pista: '' },
   { palabra: 'perspicuo', pista: '' },
   { palabra: 'estetoscopio', pista: '' },
   { palabra: 'tuberculo', pista: '' },
   { palabra: 'jurisdiccion', pista: '' },
   { palabra: 'ñandu', pista: '' },
   { palabra: 'saxofon', pista: '' }, // 50
];

const PalabraE2ETest = [{ palabra: 'test', pista: 'palabra para test' }];

const PALABRAS = {
   palabrasFaciles: FACILES,
   palabrasMedias: MEDIAS,
   palabrasDificiles: DIFICILES,
   PalabraE2ETest,
};

module.exports = PALABRAS;