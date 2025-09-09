<?php
// components/slider.php - Componente del slider con diseño glassmorphism
?>
<section class="slider-container">
    <div class="slider-wrapper">
        <div class="slider">
            <div class="slider-track" id="sliderTrack">
                <?php
                // Datos del slider
                $slides = [
                    [
                        'image' => 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
                        'title' => 'Aventura en las Montañas',
                        'subtitle' => 'Descubre paisajes increíbles',
                        'alt' => 'Montañas'
                    ],
                    [
                        'image' => 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
                        'title' => 'Escapada al Océano',
                        'subtitle' => 'Relájate junto al mar',
                        'alt' => 'Océano'
                    ],
                    [
                        'image' => 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
                        'title' => 'Exploración del Bosque',
                        'subtitle' => 'Conecta con la naturaleza',
                        'alt' => 'Bosque'
                    ],
                    [
                        'image' => 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
                        'title' => 'Vida Urbana',
                        'subtitle' => 'Experimenta la ciudad',
                        'alt' => 'Ciudad'
                    ]
                ];

                // Generar slides dinámicamente
                foreach ($slides as $slide): ?>
                    <div class="slide">
                        <img src="<?php echo $slide['image']; ?>" alt="<?php echo $slide['alt']; ?>">
                        <div class="slide-overlay">
                            <h2 class="slide-title"><?php echo $slide['title']; ?></h2>
                            <p class="slide-subtitle"><?php echo $slide['subtitle']; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
            
            <button class="slider-nav prev" onclick="prevSlide()">‹</button>
            <button class="slider-nav next" onclick="nextSlide()">›</button>
            
            <div class="slider-controls">
                <?php for ($i = 1; $i <= count($slides); $i++): ?>
                    <span class="dot<?php echo $i === 1 ? ' active' : ''; ?>" onclick="currentSlide(<?php echo $i; ?>)"></span>
                <?php endfor; ?>
            </div>
            
            <div class="progress-bar" id="progressBar"></div>
        </div>
        
        <div class="description-panel">
            <?php
            // Descripciones del slider
            $descriptions = [
                [
                    'title' => 'Aventura en las Montañas',
                    'text' => 'Embárcate en una experiencia única explorando las majestuosas montañas. Disfruta de vistas panorámicas, aire puro y la tranquilidad que solo la naturaleza puede ofrecer.',
                    'features' => [
                        'Rutas de senderismo guiadas',
                        'Vistas panorámicas espectaculares',
                        'Fotografía de paisajes',
                        'Camping bajo las estrellas'
                    ]
                ],
                [
                    'title' => 'Escapada al Océano',
                    'text' => 'Sumérgete en la serenidad del océano infinito. Perfecta para quienes buscan relajación, deportes acuáticos o simplemente contemplar la inmensidad del mar.',
                    'features' => [
                        'Deportes acuáticos variados',
                        'Playas vírgenes y cristalinas',
                        'Observación de vida marina',
                        'Atardeceres inolvidables'
                    ]
                ],
                [
                    'title' => 'Exploración del Bosque',
                    'text' => 'Adéntrate en los misterios del bosque y reconecta con la naturaleza. Una experiencia perfecta para los amantes de la flora, fauna y la aventura ecológica.',
                    'features' => [
                        'Observación de vida silvestre',
                        'Senderos naturales únicos',
                        'Talleres de botánica',
                        'Experiencia de supervivencia'
                    ]
                ],
                [
                    'title' => 'Vida Urbana',
                    'text' => 'Experimenta la energía vibrante de la ciudad moderna. Cultura, gastronomía, arquitectura y entretenimiento se combinan en una experiencia urbana incomparable.',
                    'features' => [
                        'Tours gastronómicos exclusivos',
                        'Arquitectura contemporánea',
                        'Vida nocturna vibrante',
                        'Eventos culturales únicos'
                    ]
                ]
            ];

            // Generar descripciones dinámicamente
            foreach ($descriptions as $index => $desc): ?>
                <div class="description-content<?php echo $index === 0 ? ' active' : ''; ?>" data-slide="<?php echo $index + 1; ?>">
                    <h3 class="description-title"><?php echo $desc['title']; ?></h3>
                    <p class="description-text"><?php echo $desc['text']; ?></p>
                    <ul class="description-features">
                        <?php foreach ($desc['features'] as $feature): ?>
                            <li><?php echo $feature; ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>