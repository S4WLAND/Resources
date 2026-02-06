# Formatos de Anuncios Textknow - Versión 2.0 Modernizada

## Resumen Ejecutivo

Basándome en las tendencias UI/UX de 2026 y las mejores prácticas de diseño interactivo, presento tres formatos completamente rediseñados para la sección de anuncios de Textknow:

### Tendencias 2026 Aplicadas:
- **Multimedia Integrado**: Soporte nativo para imagen/video en cards
- **Interactividad**: Elementos dinámicos, hover states complejos, micro-animaciones
- **Neo-minimalismo**: Diseño limpio con personalidad y textura
- **Bold Typography**: Tipografía expresiva que jerarquiza contenido
- **Design Tokens**: Sistema de colores coherente y adaptable
- **Storytelling Visual**: Pages detalladas con narrativa inmersiva

---

## 1. EVENTOS - "Media Event Card"

### Concepto Visual
Tarjeta moderna con **media hero** (imagen o video) que captura atención inmediata. Diseño glassmorphism sutil con badges flotantes y jerarquía clara. Soporte para estados dinámicos (próximo, en curso, finalizado) y contador de plazas en tiempo real.

### Niveles de Contenido

#### A) PREVIEW CARD (Componente en Grid/List)

**Estructura Visual:**
```
┌──────────────────────────────────────┐
│  [IMAGEN/VIDEO HERO con play button]│
│  🔴 EN VIVO | Badge Estado           │
│  ──────────────────────────────────  │
│  📅 15 Mar 2026 • 19:00 hs          │
│  Título del Evento                   │
│  📍 Ubicación | 👥 50 plazas        │
│  [Ver detalles →]                    │
└──────────────────────────────────────┘
```

**Elementos Clave:**
1. **Media Zone** (Superior, 60% altura)
   - Imagen de alta calidad o video thumbnail
   - Play button overlay (si es video)
   - Badge de estado flotante (EN VIVO, PRÓXIMO, FINALIZADO)
   - Gradient overlay en la parte inferior para legibilidad

2. **Content Zone** (Inferior, 40% altura)
   - Fecha + hora (ícono + texto bold)
   - Título del evento (H3, 2 líneas máx con ellipsis)
   - Metadatos inline (ubicación + capacidad)
   - CTA primario

**Estados UX:**
- **Normal**: Imagen nítida, sombra sutil
- **Hover**: Zoom ligero en imagen (1.05x), elevación card, CTA con arrow animation
- **Loading**: Skeleton placeholder animado
- **Lleno/Sin plazas**: Overlay semi-transparente + badge "COMPLETO"

**CTA:** "Ver detalles" | "Reservar plaza" | "Más información"

---

#### B) DETAIL PAGE (Página Completa)

**Estructura de Página:**
```
┌─────────────────────────────────────────────────────┐
│  HEADER HERO                                        │
│  [Video/Imagen Full-Width con Overlay Gradient]    │
│  Badge Estado | Breadcrumb                          │
│  Título Grande del Evento                           │
│  📅 Fecha | 🕐 Hora | 📍 Ubicación                │
│                                                     │
│  [Quick Actions: Reservar | Compartir | Calendario]│
│─────────────────────────────────────────────────────│
│  CONTENT AREA (2 columnas en desktop)              │
│  ┌─────────────────────┬─────────────────────────┐│
│  │ STORYTELLING        │ SIDEBAR                 ││
│  │ ▸ ¿De qué se trata? │ 📊 Detalles Rápidos   ││
│  │ ▸ ¿Qué aprenderás?  │ • Modalidad            ││
│  │ ▸ Speakers/Invitados│ • Duración             ││
│  │ ▸ Programa/Agenda   │ • Costo                ││
│  │ ▸ Requisitos        │ • Plazas disponibles   ││
│  │                     │                         ││
│  │ [Galería de fotos   │ 👤 Organizador         ││
│  │  de eventos pasados]│ Contacto               ││
│  │                     │                         ││
│  │                     │ [STICKY CTA]           ││
│  │                     │ Reservar mi lugar      ││
│  └─────────────────────┴─────────────────────────┘│
│                                                     │
│  EVENTOS RELACIONADOS                               │
│  [Grid de 3 cards similares]                       │
└─────────────────────────────────────────────────────┘
```

**Secciones de Contenido:**
1. **Hero Section**
   - Video/imagen a pantalla completa
   - Overlay con información clave
   - Quick actions bar

2. **Main Content**
   - Storytelling narrativo (NO bullet points)
   - Secciones con headings claros
   - Imágenes inline del evento

3. **Sidebar** (Sticky en scroll)
   - Info esencial en formato "at-a-glance"
   - Contador de plazas actualizado
   - CTA persistente

4. **Related Events**
   - Eventos similares o de la misma categoría

**CTAs en Page:**
- **Primario**: "Confirmar asistencia" (modal con formulario)
- **Secundario**: "Añadir a calendario" (descarga .ics)
- **Terciario**: "Compartir evento" (social share)
- **Cuaternario**: "Contactar organizador" (modal email)

---

### Datos Necesarios (Admin)

#### Campos para Preview Card:
```javascript
{
  id: string,
  tipo: 'evento',
  estado: 'proximo' | 'en_vivo' | 'finalizado',
  
  // Media
  mediaType: 'imagen' | 'video',
  mediaUrl: string,
  thumbnailUrl: string, // Para videos
  altText: string,
  
  // Contenido Básico
  titulo: string, // Máx 80 caracteres
  fecha: Date,
  horaInicio: string, // "19:00"
  horaFin: string, // "21:00"
  
  // Ubicación
  modalidad: 'presencial' | 'online' | 'hibrido',
  ubicacion: string, // "Centro Comunitario" o "Zoom"
  direccion?: string,
  linkOnline?: string,
  
  // Capacidad
  plazasTotal: number,
  plazasDisponibles: number,
  
  // Metadata
  categoria: string, // "Conferencia", "Taller", etc.
  etiquetas: string[],
  createdAt: Date,
  updatedAt: Date
}
```

#### Campos Adicionales para Detail Page:
```javascript
{
  // ...campos del preview +
  
  // Storytelling
  descripcionCorta: string, // 160 caracteres para meta
  descripcionCompleta: string, // Rich text/Markdown
  queAprenderas: string[],
  requisitos: string[],
  
  // Programa
  agenda: [{
    hora: string,
    actividad: string,
    duracion: number // minutos
  }],
  
  // Speakers/Invitados
  speakers: [{
    nombre: string,
    bio: string,
    foto: string,
    cargo: string
  }],
  
  // Organizador
  organizador: {
    nombre: string,
    email: string,
    telefono: string,
    foto: string
  },
  
  // Multimedia Adicional
  galeria: [{
    url: string,
    tipo: 'imagen' | 'video',
    caption: string
  }],
  
  // Información adicional
  costo: number | 'gratuito',
  duracion: number, // minutos
  certificado: boolean,
  
  // SEO
  metaTitle: string,
  metaDescription: string,
  slug: string // URL amigable
}
```

---

## 2. LANZAMIENTOS - "Product Launch Hero"

### Concepto Visual
Banner inmersivo estilo "product reveal" con **imagen/video destacado** y animaciones sutiles. Diseño asimétrico que rompe la grid tradicional para generar impacto visual. Badges dinámicos de "NUEVO" con animación pulse.

### Niveles de Contenido

#### A) PREVIEW CARD (Componente Destacado)

**Estructura Visual:**
```
┌──────────────────────────────────────────────────────┐
│  🆕 NUEVO  [Badge animado]                          │
│  ┌──────────────┬─────────────────────────────────┐ │
│  │  [IMAGEN/    │  Categoría                       │ │
│  │   VIDEO      │  Título del Lanzamiento          │ │
│  │   HERO]      │  Descripción breve del valor...  │ │
│  │              │  ✓ Beneficio principal           │ │
│  │              │  [Descubrir →] [Vista previa]    │ │
│  └──────────────┴─────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

**Elementos Clave:**
1. **Media Zone** (Izquierda/Superior, 45%)
   - Imagen/video del producto/libro/funcionalidad
   - Badge "NUEVO" o "LANZAMIENTO" flotante animado
   - Ken Burns effect sutil en hover

2. **Content Zone** (Derecha/Inferior, 55%)
   - Etiqueta de categoría
   - Título impactante (H2, bold)
   - Propuesta de valor (1-2 líneas)
   - 1-2 beneficios clave con checkmarks
   - Doble CTA (primario + secundario)

**Estados UX:**
- **Normal**: Gradiente de fondo sutil, imagen estática
- **Hover**: Imagen con zoom/movement, gradient más intenso, CTAs con scale
- **Loading**: Shimmer effect en contenido
- **Archivado**: Opacidad reducida + badge "ANTERIOR"

**CTAs:** "Descubrir ahora" (primario) | "Ver vista previa" (secundario)

---

#### B) DETAIL PAGE (Página Completa)

**Estructura de Página:**
```
┌─────────────────────────────────────────────────────┐
│  HERO SECTION                                       │
│  ┌───────────────────┬─────────────────────────┐   │
│  │ [VIDEO/IMAGEN     │ 🆕 Lanzamiento           │   │
│  │  SHOWCASE         │ Título Grande            │   │
│  │  Con controles]   │ Subtítulo/Tagline        │   │
│  │                   │ [CTA Principal]          │   │
│  └───────────────────┴─────────────────────────┘   │
│─────────────────────────────────────────────────────│
│  STORYTELLING NARRATIVO                             │
│  ┌─────────────────────────────────────────────┐   │
│  │ "Un nuevo horizonte se abre..."             │   │
│  │ [Párrafos narrativos con imágenes inline]   │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  CARACTERÍSTICAS DESTACADAS                         │
│  ┌──────┬──────┬──────┐                           │
│  │ [🎯] │ [📚] │ [💡] │                           │
│  │ Feat │ Feat │ Feat │                           │
│  └──────┴──────┴──────┘                           │
│                                                     │
│  VISTA PREVIA / SAMPLE                              │
│  [Carousel de imágenes o extracto de contenido]    │
│                                                     │
│  TESTIMONIOS / SOCIAL PROOF (si aplica)            │
│  "..." - Autor/Usuario                             │
│                                                     │
│  CALL TO ACTION FINAL                               │
│  [CTA Hero grande] Obtener ahora                   │
└─────────────────────────────────────────────────────┘
```

**Secciones de Contenido:**
1. **Hero Split Section**
   - Media showcase (video/imágenes del producto)
   - Headline + subheadline impactante
   - CTA inmediato

2. **Storytelling Section**
   - Narrativa del "por qué ahora"
   - Historia del desarrollo/autor
   - Problema que resuelve

3. **Features Grid**
   - Iconos + descripciones de características
   - Diseño en grid 3 columnas (desktop)

4. **Preview/Sample**
   - Vista previa del libro (primeras páginas)
   - Screenshots de funcionalidad
   - Video demo

5. **Social Proof**
   - Testimonios
   - Endorsements
   - Estadísticas

**CTAs en Page:**
- **Primario**: "Obtener ahora" | "Comprar" | "Acceder"
- **Secundario**: "Descargar muestra" | "Ver más detalles"
- **Terciario**: "Añadir a lista de deseos"
- **Cuaternario**: "Compartir lanzamiento"

---

### Datos Necesarios (Admin)

#### Campos para Preview Card:
```javascript
{
  id: string,
  tipo: 'lanzamiento',
  estado: 'activo' | 'archivado',
  
  // Media Principal
  mediaType: 'imagen' | 'video',
  mediaUrl: string,
  thumbnailUrl: string,
  altText: string,
  
  // Contenido Básico
  categoria: string, // "Libro", "Autor", "Funcionalidad"
  titulo: string,
  subtitulo: string, // Tagline
  descripcionCorta: string, // 120 caracteres
  
  // Beneficios (preview)
  beneficiosPrincipales: string[], // Máx 3
  
  // Metadata
  fechaLanzamiento: Date,
  etiquetas: string[],
  destacado: boolean,
  createdAt: Date
}
```

#### Campos Adicionales para Detail Page:
```javascript
{
  // ...campos del preview +
  
  // Storytelling
  narrativa: string, // Rich text - historia del lanzamiento
  problema: string, // Qué problema resuelve
  solucion: string, // Cómo lo resuelve
  
  // Características Detalladas
  caracteristicas: [{
    icono: string, // emoji o nombre de ícono
    titulo: string,
    descripcion: string
  }],
  
  // Vista Previa
  muestra: {
    tipo: 'pdf' | 'imagenes' | 'video',
    url: string,
    paginasDisponibles: number // Para libros
  },
  
  // Autor/Creador
  autor: {
    nombre: string,
    bio: string,
    foto: string,
    redesSociales: {
      facebook?: string,
      instagram?: string,
      twitter?: string
    }
  },
  
  // Información Comercial
  precio: {
    normal: number,
    oferta?: number,
    tipoOferta?: string, // "Lanzamiento especial"
  },
  disponibilidad: {
    formato: string[], // ["Digital", "Físico"]
    stock?: number
  },
  
  // Social Proof
  testimonios: [{
    nombre: string,
    rol: string,
    texto: string,
    foto?: string
  }],
  
  // Multimedia
  galeria: [{
    url: string,
    tipo: 'imagen' | 'video',
    caption: string
  }],
  
  // SEO
  metaTitle: string,
  metaDescription: string,
  slug: string,
  keywords: string[]
}
```

---

## 3. COMUNICADOS / IMPACTO - "Notice Compact Card"

### Concepto Visual
Tarjeta compacta con **ícono categórico destacado** y diseño limpio. Opción de incluir imagen/video como complemento (NO obligatorio). Sistema de categorías con colores codificados para identificación rápida.

### Niveles de Contenido

#### A) PREVIEW CARD (Componente en Grid)

**Estructura Visual:**

**Versión 1: Solo Texto (Default)**
```
┌──────────────────────────────────────┐
│  [ICONO] Tipo de Comunicado          │
│  Título del Anuncio                  │
│  Mensaje principal breve que da...   │
│  📅 5 de febrero, 2026               │
│  [Leer más →] [Compartir]            │
└──────────────────────────────────────┘
```

**Versión 2: Con Media (Opcional)**
```
┌──────────────────────────────────────┐
│  [IMAGEN/VIDEO pequeño en header]    │
│  [ICONO] Tipo de Comunicado          │
│  Título del Anuncio                  │
│  Mensaje principal...                │
│  📅 5 de febrero, 2026               │
│  [Leer completo →] [Compartir]       │
└──────────────────────────────────────┘
```

**Elementos Clave:**
1. **Header** (Opcional)
   - Imagen/video thumbnail (si aplica)
   - Aspect ratio 16:9, altura máx 180px

2. **Icon + Category Badge**
   - Ícono representativo (megáfono, corazón, info, celebración)
   - Color codificado por tipo

3. **Content**
   - Título claro (H3)
   - Resumen del mensaje (3 líneas máx)
   - Fecha de publicación

4. **Actions**
   - CTA primario
   - Botones de compartir

**Tipos y Colores:**
- **Anuncio General**: Azul (#1976d2) - Megáfono 📢
- **Impacto Social**: Rosa (#c2185b) - Corazón ❤️
- **Actualización**: Verde (#388e3c) - Info ℹ️
- **Celebración/Logro**: Naranja (#f57c00) - Estrella ⭐
- **Resumen de Evento**: Púrpura (#7b1fa2) - Cámara 📸

**Estados UX:**
- **Normal**: Fondo blanco, borde sutil de color
- **Hover**: Borde más grueso, ícono con rotate animation
- **Featured**: Borde grueso + badge "DESTACADO"
- **Archivado**: Opacidad 0.7

**CTAs:** "Leer completo" | "Ver más" | "Conocer detalles"

---

#### B) DETAIL PAGE (Página Completa tipo Artículo)

**Estructura de Página:**
```
┌─────────────────────────────────────────────────────┐
│  HEADER                                             │
│  [Imagen Hero opcional]                             │
│  Breadcrumb: Inicio > Comunicados > [Categoría]     │
│  [ICONO] Categoría                                  │
│  Título Principal del Comunicado                    │
│  📅 Fecha de publicación | ✍️ Autor                │
│─────────────────────────────────────────────────────│
│  ARTICLE CONTENT                                    │
│  ┌─────────────────────────────────────────────┐   │
│  │ Contenido en formato artículo               │   │
│  │ • Párrafos narrativos                       │   │
│  │ • Imágenes inline                           │   │
│  │ • Quotes destacados                         │   │
│  │ • Videos embebidos                          │   │
│  │ • Call-outs con información clave          │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  GALERÍA (si es resumen de evento pasado)           │
│  [Grid de fotos/videos del evento]                 │
│                                                     │
│  SOCIAL SHARE                                       │
│  Compartir: [Facebook] [Twitter] [WhatsApp]        │
│                                                     │
│  COMUNICADOS RELACIONADOS                           │
│  [Grid de 3 cards similares]                       │
└─────────────────────────────────────────────────────┘
```

**Secciones de Contenido:**

1. **Header Editorial**
   - Imagen hero (opcional)
   - Breadcrumb navigation
   - Título + metadata

2. **Article Body**
   - Contenido formateado como artículo editorial
   - Tipografía optimizada para lectura
   - Imágenes/videos inline
   - Blockquotes para citas importantes
   - Info boxes para datos destacados

3. **Galería Multimedia** (para resúmenes de eventos)
   - Grid de fotos del evento
   - Videos testimoniales
   - Captions descriptivos

4. **Social Engagement**
   - Botones de compartir
   - Contador de shares (opcional)

5. **Related Content**
   - Comunicados similares
   - Otros anuncios de la categoría

**CTAs en Page:**
- **Primario**: Depende del tipo de comunicado:
  - Anuncio: "Donar ahora" | "Más información" | "Contactar"
  - Impacto: "Ver proyecto" | "Unirme"
  - Actualización: "Entendido" | "Ver cambios"
  - Resumen: "Ver próximo evento"
- **Secundario**: "Compartir comunicado"
- **Terciario**: "Suscribirse a comunicados"

---

### Datos Necesarios (Admin)

#### Campos para Preview Card:
```javascript
{
  id: string,
  tipo: 'comunicado',
  categoria: 'anuncio' | 'impacto' | 'actualizacion' | 'celebracion' | 'resumen_evento',
  
  // Media (Opcional)
  tieneMedia: boolean,
  mediaType?: 'imagen' | 'video',
  mediaUrl?: string,
  thumbnailUrl?: string,
  altText?: string,
  
  // Contenido Básico
  titulo: string, // Máx 100 caracteres
  resumen: string, // Máx 200 caracteres
  
  // Metadata
  fechaPublicacion: Date,
  autor: string, // "Equipo Textknow" o nombre específico
  destacado: boolean,
  
  // Estado
  estado: 'publicado' | 'borrador' | 'archivado',
  createdAt: Date,
  updatedAt: Date
}
```

#### Campos Adicionales para Detail Page:
```javascript
{
  // ...campos del preview +
  
  // Contenido Completo
  contenido: string, // Rich text/Markdown completo
  
  // Imágenes/Videos en el contenido
  mediaInline: [{
    url: string,
    tipo: 'imagen' | 'video',
    caption: string,
    posicion: number // Orden en el contenido
  }],
  
  // Para Resúmenes de Eventos
  esResumenEvento: boolean,
  eventoRelacionado?: string, // ID del evento
  galeria?: [{
    url: string,
    tipo: 'imagen' | 'video',
    caption: string,
    credito: string // Fotógrafo/creador
  }],
  
  // Datos Impacto (si es comunicado de impacto)
  datosImpacto?: {
    familiasAlcanzadas?: number,
    librosDistribuidos?: number,
    eventoRealizados?: number,
    // Cualquier métrica relevante
  },
  
  // Quotes destacados
  quotes: [{
    texto: string,
    autor: string,
    cargo?: string
  }],
  
  // Enlaces relacionados
  enlaces: [{
    titulo: string,
    url: string,
    descripcion: string
  }],
  
  // Call to Action específico
  cta: {
    texto: string,
    url: string,
    tipo: 'interno' | 'externo'
  },
  
  // Social Share
  compartido: {
    facebook: number,
    twitter: number,
    whatsapp: number
  },
  
  // SEO
  metaTitle: string,
  metaDescription: string,
  slug: string,
  keywords: string[]
}
```

---

## Responsive Design - Breakpoints

### Mobile (< 768px)
- **Eventos**: Layout vertical, media arriba
- **Lanzamientos**: Layout vertical, imagen arriba
- **Comunicados**: Layout vertical, ancho completo
- Grid: 1 columna
- CTAs: Full-width
- Sidebar: Abajo del contenido principal

### Tablet (768px - 1024px)
- Grid: 2 columnas
- Layouts híbridos (horizontal en cards grandes)
- Sidebar sticky deshabilitado

### Desktop (> 1024px)
- Grid: 3 columnas (eventos y comunicados), 1-2 cols (lanzamientos)
- Layouts horizontales
- Sidebar sticky habilitado
- Hover effects completos

---

## Guía de CTAs por Nivel

### Preview Card (Listado)
**Objetivo**: Generar clic para ver detalle

| Tipo | CTA Primario | CTA Secundario |
|------|--------------|----------------|
| Eventos | "Ver detalles" | - |
| Lanzamientos | "Descubrir ahora" | "Vista previa" |
| Comunicados | "Leer completo" | "Compartir" |

### Detail Page (Página Completa)
**Objetivo**: Conversión final o engagement profundo

| Tipo | CTA Primario | CTAs Secundarios |
|------|--------------|------------------|
| Eventos | "Confirmar asistencia" / "Reservar plaza" | "Añadir a calendario", "Compartir", "Contactar organizador" |
| Lanzamientos | "Obtener ahora" / "Comprar" / "Acceder" | "Descargar muestra", "Lista de deseos", "Compartir" |
| Comunicados | Varía según tipo: "Donar", "Más info", "Ver proyecto" | "Compartir", "Suscribirse", "Contactar" |

---

## Resumen Comparativo Final

| Aspecto | Eventos | Lanzamientos | Comunicados |
|---------|---------|--------------|-------------|
| **Media** | Obligatoria (img/video) | Obligatoria (img/video) | Opcional (img/video) |
| **Layout Preview** | Vertical (media arriba) | Horizontal (media izq) | Vertical/Compacto |
| **Enfoque** | Urgencia temporal | Impacto visual | Información clara |
| **Interactividad** | Alta (plazas, calendario) | Media (preview, wishlist) | Baja (lectura, share) |
| **Longitud Content** | Media | Larga (storytelling) | Variable |
| **Galería** | En detail page | En detail page | Solo si es resumen |
| **Social Proof** | Plazas ocupadas | Testimonios | Shares/engagement |
| **Update Frequency** | Constante (plazas) | Baja (una vez) | Media |

---

## Sistema de Colores Recomendado

### Paleta Principal (Textknow)
```css
:root {
  /* Primarios */
  --color-primary: #4a7ba7;      /* Azul editorial */
  --color-primary-dark: #3d6789;
  --color-primary-light: #6b95bb;
  
  /* Secundarios por categoría */
  --color-evento: #5b8bb5;       /* Azul eventos */
  --color-lanzamiento: #e67e22;  /* Naranja lanzamientos */
  --color-comunicado: #4a7ba7;   /* Azul comunicados */
  
  /* Categorías de Comunicados */
  --color-anuncio: #1976d2;
  --color-impacto: #c2185b;
  --color-actualizacion: #388e3c;
  --color-celebracion: #f57c00;
  --color-resumen: #7b1fa2;
  
  /* Neutrales */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-background: #f8f9fa;
  --color-surface: #ffffff;
  --color-border: #e0e0e0;
  
  /* Estados */
  --color-success: #4caf50;
  --color-warning: #ff9800;
  --color-error: #f44336;
  --color-info: #2196f3;
}
```

---

## Consideraciones de Implementación

### Backend/Admin
1. **Validación de campos**: 
   - Límites de caracteres estrictos
   - Validación de URLs de media
   - Formato de fechas/horas

2. **Optimización de media**:
   - Compresión automática de imágenes
   - Generación de thumbnails
   - Soporte para CDN

3. **Sistema de estados**:
   - Auto-actualización de eventos pasados
   - Contador de plazas en tiempo real
   - Publicación programada

### Frontend
1. **Performance**:
   - Lazy loading de imágenes
   - Skeleton loaders
   - Infinite scroll o paginación

2. **Accesibilidad**:
   - ARIA labels
   - Navegación por teclado
   - Contraste WCAG AA

3. **Analytics**:
   - Tracking de clicks en CTAs
   - Tiempo de permanencia en detail pages
   - Conversión por tipo de anuncio

---

## Próximos Pasos

1. **Prototipos HTML**: Crear versiones completas funcionales
2. **Design System**: Documentar componentes reutilizables
3. **User Testing**: Validar con usuarios reales
4. **Iteración**: Ajustar basándose en feedback
5. **Implementación**: Integrar con backend existente

---

*Documento creado: Febrero 2026*  
*Versión: 2.0 - Modernizada con tendencias 2026*
