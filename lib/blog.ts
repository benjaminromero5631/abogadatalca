export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  areaSlug: string;
  displayDate: string;
  readingTime: string;
  excerpt: string;
  author: string;
  content: ContentBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  // ─── DERECHO LABORAL ─────────────────────────────────────────────────────────
  {
    slug: "despido-injustificado-chile",
    title: "¿Qué hacer si me despiden injustamente en Chile?",
    seoTitle: "Despido Injustificado en Chile — Plazos, Indemnizaciones y Cómo Demandar",
    metaDescription:
      "Guía completa sobre el despido injustificado en Chile. Plazos legales, indemnizaciones y pasos para demandar. Abogadas laboralistas en Talca, Región del Maule.",
    keywords: [
      "despido injustificado chile",
      "despido injusto talca",
      "indemnizacion despido chile",
      "demandar despido",
      "abogado laboral talca",
      "plazo demandar despido",
    ],
    category: "Derecho Laboral",
    areaSlug: "derecho-laboral",
    displayDate: "15 de marzo de 2025",
    readingTime: "6 min",
    excerpt:
      "Si fuiste despedido sin causa justificada, tienes derechos que la ley protege. Explicamos qué hacer, cuánto tiempo tienes y qué indemnizaciones te corresponden.",
    author: "Catalina Fuentes Tapia",
    content: [
      {
        type: "h2",
        text: "¿Qué es un despido injustificado?",
      },
      {
        type: "p",
        text: "El despido injustificado ocurre cuando el empleador pone término al contrato de trabajo sin una causal válida contemplada en el Código del Trabajo, o cuando invoca una causal que no puede probar. También existe el despido indirecto (o autodespido), en que el trabajador se ve forzado a renunciar por el incumplimiento grave del empleador.",
      },
      {
        type: "h2",
        text: "Causales válidas de despido según el Código del Trabajo",
      },
      {
        type: "p",
        text: "El artículo 160 del Código del Trabajo establece las causales de caducidad — las más graves, sin indemnización. El artículo 161 contempla las causales con derecho a indemnización: necesidades de la empresa y desahucio. Si ninguna de estas causales aplica correctamente, el despido es injustificado.",
      },
      {
        type: "ul",
        items: [
          "Falta de probidad del trabajador",
          "Conductas de acoso sexual o laboral",
          "Vías de hecho ejercidas por el trabajador",
          "Injurias al empleador",
          "Abandono de trabajo",
          "Actos que dañen los bienes de la empresa",
          "Incumplimiento grave de las obligaciones del contrato",
        ],
      },
      {
        type: "h2",
        text: "El plazo más importante: 60 días hábiles",
      },
      {
        type: "p",
        text: "Desde la fecha de despido tienes 60 días hábiles para presentar una demanda por despido injustificado ante el Juzgado de Letras del Trabajo. Pasado ese plazo, la acción prescribe y ya no puedes reclamar. En la Región del Maule, el tribunal competente es el Juzgado de Letras del Trabajo de Talca.",
      },
      {
        type: "p",
        text: "Este plazo es el más crítico en materia laboral. Por eso es fundamental consultar con una abogada laboralista apenas se produce el despido — incluso antes de firmar el finiquito.",
      },
      {
        type: "h2",
        text: "¿Qué indemnizaciones te corresponden?",
      },
      {
        type: "p",
        text: "Si el tribunal declara el despido injustificado, tienes derecho a:",
      },
      {
        type: "ul",
        items: [
          "Indemnización por años de servicio: 30 días de remuneración por cada año trabajado (máximo 11 años)",
          "Indemnización sustitutiva del aviso previo: 30 días si no se te avisó con un mes de anticipación",
          "Feriado proporcional: los días de vacaciones no tomados",
          "Recargo legal: entre un 30% y 100% adicional sobre la indemnización por años, según la causal invocada",
          "Cotizaciones previsionales impagas, si existieren",
        ],
      },
      {
        type: "h2",
        text: "¿Puedo demandar si firmé el finiquito?",
      },
      {
        type: "p",
        text: "Depende de lo que firmaste. En muchos casos, los trabajadores firman bajo presión o sin entender lo que implica el documento. Si el finiquito no incluye todas las indemnizaciones que te corresponden, es posible impugnarlo. Consulta antes de firmar: una vez suscrito, puede ser más difícil — aunque no imposible — cuestionar su validez.",
      },
      {
        type: "h2",
        text: "Pasos para reclamar un despido injustificado",
      },
      {
        type: "ul",
        items: [
          "Reunir la documentación: contrato, liquidaciones, carta de despido y finiquito si lo hay",
          "Consultar con una abogada laboral para evaluar el caso y la estrategia",
          "Presentar la demanda ante el Juzgado de Letras del Trabajo de Talca",
          "Participar en la audiencia de conciliación donde el tribunal intenta un acuerdo",
          "Si no hay acuerdo: juicio oral y sentencia",
        ],
      },
      {
        type: "h2",
        text: "Abogadas laborales en Talca — consulta gratuita",
      },
      {
        type: "p",
        text: "En Abogadas Talca representamos trabajadores de la Región del Maule ante los Tribunales Laborales. Si fuiste despedido injustamente, contamos con más de 12 años de experiencia en litigación laboral. La primera consulta es gratuita y sin compromiso.",
      },
    ],
  },
  {
    slug: "acoso-laboral-chile",
    title: "Acoso laboral en Chile: cómo denunciarlo y qué dice la ley",
    seoTitle: "Acoso Laboral en Chile — Cómo Denunciar y Qué Dice la Ley 20.607",
    metaDescription:
      "Todo sobre el acoso laboral en Chile. Qué es, cómo denunciarlo y cuáles son tus derechos según la Ley 20.607. Abogadas laboralistas en Talca, Región del Maule.",
    keywords: [
      "acoso laboral chile",
      "mobbing chile",
      "ley 20607 acoso laboral",
      "denunciar acoso laboral talca",
      "tutela derechos fundamentales",
      "acoso laboral maule",
    ],
    category: "Derecho Laboral",
    areaSlug: "derecho-laboral",
    displayDate: "10 de febrero de 2025",
    readingTime: "5 min",
    excerpt:
      "El acoso laboral es ilegal en Chile desde 2012. Si lo sufres, tienes herramientas legales concretas para denunciarlo y exigir reparación. Te explicamos cómo.",
    author: "Catalina Fuentes Tapia",
    content: [
      {
        type: "h2",
        text: "¿Qué es el acoso laboral según la ley chilena?",
      },
      {
        type: "p",
        text: "La Ley 20.607 (2012) incorporó al Código del Trabajo la definición de acoso laboral: toda conducta que constituya agresión u hostigamiento reiterados, ejercida por el empleador o por uno o más trabajadores en contra de otro, por cualquier medio, y que tenga como resultado para el afectado su menoscabo, maltrato o humillación, o bien que amenace o perjudique su situación laboral.",
      },
      {
        type: "h2",
        text: "¿Cómo se manifiesta el acoso laboral?",
      },
      {
        type: "ul",
        items: [
          "Insultos, gritos o descalificaciones frente a compañeros",
          "Asignación de tareas humillantes o incompatibles con el cargo",
          "Aislamiento deliberado del trabajador",
          "Sobrecarga de trabajo o privación total de tareas",
          "Vigilancia excesiva o control desproporcionado",
          "Difusión de rumores o información falsa sobre el trabajador",
          "Amenazas veladas o explícitas sobre el empleo",
        ],
      },
      {
        type: "h2",
        text: "¿Cómo denunciar el acoso laboral?",
      },
      {
        type: "ul",
        items: [
          "Vía interna: presentar una queja ante Recursos Humanos o través del procedimiento de denuncia que debe tener toda empresa — la empresa está obligada a investigar",
          "Inspección del Trabajo: denuncia directa ante la Dirección del Trabajo de Talca, Región del Maule",
          "Acción de tutela: si el acoso afecta derechos fundamentales como la dignidad o la integridad, se puede interponer una acción de tutela ante el Juzgado de Letras del Trabajo",
        ],
      },
      {
        type: "h2",
        text: "La acción de tutela de derechos fundamentales",
      },
      {
        type: "p",
        text: "Es la herramienta más poderosa contra el acoso laboral. Se presenta directamente ante el tribunal laboral y tiene plazos acotados. Si el tribunal acoge la acción, puede ordenar el cese del acoso, el pago de una indemnización especial de hasta 11 remuneraciones y, en casos graves, el término del contrato del acosador.",
      },
      {
        type: "h2",
        text: "¿Qué evidencia necesitas?",
      },
      {
        type: "ul",
        items: [
          "Mensajes de texto, correos o WhatsApp con contenido acosador",
          "Testimonios de compañeros de trabajo dispuestos a declarar",
          "Registro de las situaciones: fecha, hora, lugar y descripción de lo ocurrido",
          "Informes médicos o psicológicos si el acoso afectó tu salud",
        ],
      },
      {
        type: "h2",
        text: "Consulta con una abogada en Talca",
      },
      {
        type: "p",
        text: "Si estás sufriendo acoso laboral en la Región del Maule, no tienes que enfrentarlo solo. En Abogadas Talca evaluamos tu caso de forma gratuita y te explicamos las opciones legales disponibles. Actuamos con rapidez porque los plazos en materia de tutela son breves.",
      },
    ],
  },

  // ─── DERECHO DE FAMILIA ───────────────────────────────────────────────────────
  {
    slug: "pension-alimentos-chile",
    title: "Pensión de alimentos en Chile: cómo calcularla y exigirla",
    seoTitle: "Pensión de Alimentos en Chile — Cómo Calcularla y Exigirla en 2025",
    metaDescription:
      "Guía completa sobre pensión de alimentos en Chile: cómo se calcula, qué incluye, cómo demandar y qué pasa si no se paga. Abogadas de familia en Talca, Maule.",
    keywords: [
      "pension de alimentos chile",
      "pension alimenticia talca",
      "alimentos menores chile",
      "demandar pension alimentos",
      "abogado familia talca",
      "pension alimentos maule",
    ],
    category: "Derecho de Familia",
    areaSlug: "derecho-familia",
    displayDate: "1 de abril de 2025",
    readingTime: "7 min",
    excerpt:
      "La pensión de alimentos protege el derecho de los hijos a ser mantenidos por ambos padres. Explicamos cómo calcularla, demandarla y qué herramientas tiene la ley si no se paga.",
    author: "Catalina Fuentes Tapia",
    content: [
      {
        type: "h2",
        text: "¿Qué es la pensión de alimentos?",
      },
      {
        type: "p",
        text: "La pensión de alimentos es la obligación legal de un padre o madre de contribuir económicamente al sustento de sus hijos menores de 18 años — o hasta los 28 si estudian. En Chile está regulada por la Ley 14.908 y sus modificaciones. No es un favor: es un derecho del hijo y una obligación legal del alimentante.",
      },
      {
        type: "h2",
        text: "¿Qué cubre la pensión de alimentos?",
      },
      {
        type: "ul",
        items: [
          "Alimentación y vestuario",
          "Educación y útiles escolares",
          "Salud y medicamentos",
          "Habitación y servicios básicos",
          "Recreación y actividades extracurriculares",
        ],
      },
      {
        type: "h2",
        text: "¿Cómo se calcula la pensión de alimentos?",
      },
      {
        type: "p",
        text: "No existe una fórmula fija, pero la ley establece un mínimo: el 40% del ingreso mínimo mensual por hijo. El tribunal considera los ingresos reales del alimentante (sueldo, boletas de honorarios, arriendos, etc.), las necesidades concretas del hijo y el nivel de vida familiar antes de la separación.",
      },
      {
        type: "p",
        text: "Es posible pedir una pensión provisoria desde el primer día de la demanda. El tribunal la fija en la primera audiencia y es exigible de inmediato, antes de que el juicio termine.",
      },
      {
        type: "h2",
        text: "¿Cómo demandar la pensión de alimentos?",
      },
      {
        type: "ul",
        items: [
          "Presentar la demanda ante el Juzgado de Familia de Talca o del domicilio del hijo",
          "El tribunal fija una pensión provisoria en la primera audiencia",
          "Audiencia preparatoria donde se intenta un acuerdo entre las partes",
          "Si no hay acuerdo, hay juicio oral y el tribunal dicta sentencia definitiva",
          "La sentencia establece la pensión definitiva, su monto y la forma de pago",
        ],
      },
      {
        type: "h2",
        text: "¿Qué pasa si el alimentante no paga?",
      },
      {
        type: "p",
        text: "La ley chilena tiene herramientas coercitivas fuertes para el incumplimiento:",
      },
      {
        type: "ul",
        items: [
          "Retención directa desde el empleador: se ordena al empleador descontar la pensión del sueldo",
          "Arresto nocturno: hasta 15 días por deuda equivalente a un mes de pensión",
          "Arraigo nacional: prohibición de salir del país",
          "Retención de devolución de impuestos en Operación Renta",
          "Inhabilidad para renovar la licencia de conducir",
        ],
      },
      {
        type: "h2",
        text: "¿Se puede modificar la pensión?",
      },
      {
        type: "p",
        text: "Sí. Si cambian las circunstancias — variación del ingreso del alimentante o cambio en las necesidades del hijo — cualquiera de las partes puede pedir al tribunal que ajuste la pensión. Esta acción se llama aumento o rebaja de alimentos.",
      },
      {
        type: "h2",
        text: "Abogadas de familia en Talca",
      },
      {
        type: "p",
        text: "En Abogadas Talca gestionamos demandas de alimentos para clientes de Talca, Curicó, Linares y toda la Región del Maule. La primera consulta es gratuita. Si el caso lo requiere, pedimos pensión provisoria desde el día uno.",
      },
    ],
  },
  {
    slug: "divorcio-en-chile-mutuo-acuerdo-vs-unilateral",
    title: "Divorcio en Chile: mutuo acuerdo vs unilateral — diferencias y plazos",
    seoTitle: "Divorcio en Chile 2025 — Mutuo Acuerdo vs Unilateral: Guía Completa",
    metaDescription:
      "Diferencias entre divorcio de mutuo acuerdo y divorcio unilateral en Chile. Plazos, requisitos y cómo acreditar el cese de convivencia. Abogadas de familia en Talca.",
    keywords: [
      "divorcio chile",
      "divorcio mutuo acuerdo chile",
      "divorcio unilateral chile",
      "plazos divorcio chile",
      "abogado divorcio talca",
      "divorcio maule",
    ],
    category: "Derecho de Familia",
    areaSlug: "derecho-familia",
    displayDate: "20 de enero de 2025",
    readingTime: "6 min",
    excerpt:
      "En Chile existen dos tipos de divorcio: por mutuo acuerdo y unilateral. Las diferencias en plazos y requisitos son clave. Te explicamos cada uno con detalle.",
    author: "Catalina Fuentes Tapia",
    content: [
      {
        type: "h2",
        text: "¿Desde cuándo existe el divorcio en Chile?",
      },
      {
        type: "p",
        text: "La Ley de Matrimonio Civil N° 19.947 de 2004 introdujo el divorcio vincular en Chile, poniendo fin al matrimonio en forma definitiva y permitiendo a las partes contraer nuevas nupcias. Existen dos vías: el divorcio de mutuo acuerdo y el divorcio unilateral.",
      },
      {
        type: "h2",
        text: "Divorcio de mutuo acuerdo",
      },
      {
        type: "p",
        text: "Es la vía más rápida cuando ambas partes están de acuerdo. Requisitos principales:",
      },
      {
        type: "ul",
        items: [
          "Ambos cónyuges deben estar de acuerdo con el divorcio",
          "Deben haber cesado la convivencia por al menos 1 año",
          "Deben presentar un acuerdo completo que regule la situación de los hijos, los bienes y la compensación económica si corresponde",
        ],
      },
      {
        type: "p",
        text: "El proceso ante el Juzgado de Familia tarda entre 3 y 6 meses desde la presentación. Las partes deben comparecer personalmente a las audiencias.",
      },
      {
        type: "h2",
        text: "Divorcio unilateral",
      },
      {
        type: "p",
        text: "Cuando solo una de las partes quiere divorciarse. El cónyuge que pide el divorcio debe acreditar que han cesado la convivencia por al menos 3 años. No necesita el consentimiento de la otra parte.",
      },
      {
        type: "ul",
        items: [
          "Requisito: cese de convivencia continuo de al menos 3 años",
          "Debe acreditarse el cese con documentos: escritura de separación, fecha notarial, demanda de alimentos, etc.",
          "El proceso puede tardar más que el mutuo acuerdo según la carga del tribunal",
        ],
      },
      {
        type: "h2",
        text: "¿Cómo se acredita el cese de convivencia?",
      },
      {
        type: "p",
        text: "Este es uno de los puntos más críticos del divorcio unilateral. La ley exige que el cese de convivencia sea demostrable. Se puede acreditar con:",
      },
      {
        type: "ul",
        items: [
          "Escritura pública de separación",
          "Acta de mediación con fecha de separación",
          "Demanda de alimentos o tuición presentada con fecha",
          "Declaración jurada de testigos",
          "Documentos que muestren domicilios separados (arriendo, boletas de servicios)",
        ],
      },
      {
        type: "h2",
        text: "Compensación económica",
      },
      {
        type: "p",
        text: "Si uno de los cónyuges se dedicó al hogar o a los hijos durante el matrimonio y por eso tiene un deterioro económico, puede pedir una compensación económica. El tribunal la fija considerando la duración del matrimonio, la situación económica de ambas partes y el perjuicio patrimonial sufrido.",
      },
      {
        type: "h2",
        text: "¿Necesito un abogado para divorciarme?",
      },
      {
        type: "p",
        text: "Sí. En Chile, tanto el demandante como el demandado en un divorcio deben estar representados por abogado habilitado. En Abogadas Talca tramitamos divorcios de mutuo acuerdo y unilaterales para clientes de toda la Región del Maule. La primera consulta es gratuita.",
      },
    ],
  },

  // ─── DERECHO CIVIL ────────────────────────────────────────────────────────────
  {
    slug: "posesion-efectiva-chile",
    title: "Posesión efectiva en Chile: guía completa para herederos",
    seoTitle: "Posesión Efectiva en Chile 2025 — Guía Completa para Herederos",
    metaDescription:
      "Qué es la posesión efectiva, cómo tramitarla y cuánto tarda. Guía completa para herederos en Chile. Abogadas civiles en Talca, Región del Maule. Consulta gratis.",
    keywords: [
      "posesion efectiva chile",
      "posesion efectiva talca",
      "tramitar herencia chile",
      "herederos bienes raices chile",
      "abogado herencia talca",
      "posesion efectiva maule",
    ],
    category: "Derecho Civil",
    areaSlug: "derecho-civil",
    displayDate: "5 de marzo de 2025",
    readingTime: "6 min",
    excerpt:
      "La posesión efectiva es el trámite legal indispensable para que los herederos puedan disponer de los bienes del fallecido. Explicamos dónde tramitarla, cuánto tarda y qué documentos necesitas.",
    author: "Catalina Fuentes Tapia",
    content: [
      {
        type: "h2",
        text: "¿Qué es la posesión efectiva?",
      },
      {
        type: "p",
        text: "La posesión efectiva es la resolución legal que reconoce formalmente a los herederos de una persona fallecida. Sin ella, los herederos no pueden disponer libremente de los bienes del causante: no pueden vender propiedades, retirar dinero de cuentas bancarias ni transferir vehículos a su nombre.",
      },
      {
        type: "h2",
        text: "¿Dónde se tramita?",
      },
      {
        type: "p",
        text: "Depende del tipo de herencia:",
      },
      {
        type: "ul",
        items: [
          "Registro Civil: cuando el causante no dejó testamento y no hay bienes raíces entre los bienes heredados",
          "Tribunal Civil: cuando hay bienes raíces, cuando el causante dejó testamento, o cuando los herederos no están de acuerdo",
        ],
      },
      {
        type: "p",
        text: "En la Región del Maule, la tramitación judicial se hace ante el Juzgado Civil de Talca o el del domicilio del causante al momento de su fallecimiento.",
      },
      {
        type: "h2",
        text: "Documentos necesarios",
      },
      {
        type: "ul",
        items: [
          "Certificado de defunción del causante",
          "Certificados de nacimiento de todos los herederos",
          "Certificado de matrimonio si aplica",
          "Inventario de los bienes del causante",
          "Testamento si existe",
          "Liquidación de impuesto a las herencias del SII",
          "Identificación de todos los herederos",
        ],
      },
      {
        type: "h2",
        text: "¿Cuánto tarda la posesión efectiva?",
      },
      {
        type: "p",
        text: "En el Registro Civil, el proceso tarda entre 1 y 3 meses si la documentación está completa y no hay objeciones. La tramitación judicial ante el tribunal civil puede tardar entre 3 y 12 meses, dependiendo de la complejidad del caso y la carga del tribunal.",
      },
      {
        type: "h2",
        text: "Impuesto a las herencias",
      },
      {
        type: "p",
        text: "En Chile existe el impuesto a las herencias (Ley 16.271). Sin embargo, existe una exención para herencias inferiores a 600 Unidades Tributarias Mensuales por heredero. En la práctica, la mayoría de las herencias de bienes modestos no pagan impuesto. El SII emite un certificado de exención o liquida el impuesto según corresponda.",
      },
      {
        type: "h2",
        text: "¿Qué pasa con las deudas del fallecido?",
      },
      {
        type: "p",
        text: "Los herederos responden por las deudas del causante con cargo a la herencia, no con su propio patrimonio, salvo que acepten la herencia sin beneficio de inventario. Por eso es fundamental hacer un inventario completo antes de aceptar: si las deudas superan los activos, puede convenir renunciar a la herencia.",
      },
      {
        type: "h2",
        text: "¿Qué pasos siguen después?",
      },
      {
        type: "ul",
        items: [
          "Inscripción en el Conservador de Bienes Raíces para propiedades",
          "Transferencia de vehículos en el Registro de Vehículos Motorizados",
          "Retiro de fondos bancarios o de AFP",
          "Liquidación de la comunidad hereditaria si los herederos quieren dividir los bienes",
        ],
      },
      {
        type: "h2",
        text: "Abogadas civiles en Talca",
      },
      {
        type: "p",
        text: "En Abogadas Talca tramitamos posesiones efectivas tanto en el Registro Civil como ante los tribunales de la Región del Maule. Manejamos toda la gestión documental y te mantenemos informado de cada paso. Consulta gratuita.",
      },
    ],
  },

  // ─── DERECHO PENAL ────────────────────────────────────────────────────────────
  {
    slug: "como-presentar-querella-chile",
    title: "¿Cómo presentar una querella en Chile? Guía paso a paso",
    seoTitle: "Cómo Presentar una Querella en Chile — Guía 2025 Paso a Paso",
    metaDescription:
      "Guía completa para presentar una querella en Chile. Qué es, cuándo conviene, cómo se presenta y cuáles son tus derechos como víctima. Abogadas penalistas en Talca.",
    keywords: [
      "presentar querella chile",
      "querella penal chile",
      "querella talca",
      "representacion victimas chile",
      "abogado penal talca",
      "querella maule",
    ],
    category: "Derecho Penal",
    areaSlug: "derecho-penal",
    displayDate: "25 de febrero de 2025",
    readingTime: "5 min",
    excerpt:
      "La querella es la herramienta que permite a la víctima participar activamente en el proceso penal. Explicamos cuándo conviene presentarla, cómo se hace y qué derechos tienes.",
    author: "Catalina Fuentes Tapia",
    content: [
      {
        type: "h2",
        text: "¿Qué es una querella?",
      },
      {
        type: "p",
        text: "La querella es un escrito formal presentado por la víctima de un delito ante el tribunal penal, mediante el cual se ejerce la acción penal y se pide que se investigue, juzgue y sancione al imputado. A diferencia de la simple denuncia, la querella otorga a la víctima la calidad de parte en el proceso penal, con derechos procesales específicos.",
      },
      {
        type: "h2",
        text: "¿Cuál es la diferencia entre una denuncia y una querella?",
      },
      {
        type: "p",
        text: "La denuncia es el acto de informar a la autoridad sobre un delito — cualquier persona puede denunciar. La querella, en cambio, es un acto jurídico formal que solo puede presentar la víctima o su representante legal y requiere abogado habilitado. Con la querella, la víctima puede:",
      },
      {
        type: "ul",
        items: [
          "Acceder al expediente y las pruebas de la investigación",
          "Solicitar diligencias específicas al Fiscal",
          "Recurrir las decisiones del Ministerio Público, incluido el cierre de la investigación",
          "Participar en todas las audiencias del proceso",
          "Pedir reparación civil dentro del mismo proceso penal",
        ],
      },
      {
        type: "h2",
        text: "¿Cuándo conviene presentar querella?",
      },
      {
        type: "ul",
        items: [
          "Cuando quieres participar activamente en la investigación y el proceso",
          "Cuando desconfías de la actuación del Ministerio Público",
          "Cuando el delito tiene graves consecuencias y quieres asegurarte de que sea perseguido",
          "Cuando quieres obtener reparación civil además de la condena penal",
          "Cuando hay riesgo de que la investigación se archive por falta de impulso",
        ],
      },
      {
        type: "h2",
        text: "¿Cómo se presenta una querella?",
      },
      {
        type: "ul",
        items: [
          "Contratar un abogado habilitado — es obligatorio",
          "Redactar la querella con los hechos, el delito imputado y las diligencias solicitadas",
          "Presentarla ante el Juzgado de Garantía del lugar donde ocurrió el delito",
          "El tribunal la admite a tramitación o la declara inadmisible",
          "Si es admitida, la víctima queda como querellante y participa formalmente en el proceso",
        ],
      },
      {
        type: "h2",
        text: "¿Qué pasa con la reparación civil?",
      },
      {
        type: "p",
        text: "Puedes demandar la reparación del daño (daño material y daño moral) dentro del mismo proceso penal, reservar la acción civil para un juicio posterior, o llegar a un acuerdo reparatorio con el imputado. El acuerdo reparatorio es frecuente en delitos de menor gravedad y puede ser una forma más rápida de obtener compensación.",
      },
      {
        type: "h2",
        text: "Representación de víctimas en Talca",
      },
      {
        type: "p",
        text: "En Abogadas Talca representamos a víctimas de delitos en toda la Región del Maule. Redactamos y presentamos querellas, actuamos en todas las audiencias y negociamos reparaciones. La primera asesoría es gratuita.",
      },
    ],
  },
];
