// FaqSection.jsx — clean accordion with plus/cross icon (no emoji).

function FaqSection() {
  const items = [
    ['¿Qué es Matlyst?', 'Matlyst es una aplicación móvil que funciona como red social gastronómica. Permite a los usuarios descubrir, compartir y guardar recomendaciones de restaurantes basadas en los gustos de personas reales de su comunidad, no en algoritmos publicitarios ni en reseñas anónimas.'],
    ['¿Cuándo estará disponible Matlyst?', 'Matlyst está actualmente en fase de desarrollo y lanzamiento. Puedes unirte a la lista de espera para recibir acceso prioritario antes de la apertura al público general.'],
    ['¿Matlyst es gratuita?', 'Sí. Matlyst será gratuita para todos los usuarios en su lanzamiento. Únete a la lista de espera para ser el primero en descargarlo.'],
    ['¿En qué se diferencia Matlyst de TripAdvisor o Google Maps?', 'La diferencia principal es que en Matlyst las recomendaciones vienen de personas reales de tu comunidad cuyos gustos conoces y valoras. A diferencia de TripAdvisor o Google Maps, donde cualquier persona puede dejar una reseña sin contexto, Matlyst te permite conectar con gente que comparte tus preferencias gastronómicas y filtrar el ruido.'],
    ['¿Matlyst funciona en toda España?', 'Sí. El lanzamiento inicial tiene cobertura nacional en España, con especial foco en ciudades con alta densidad gastronómica como Madrid, Barcelona, Valencia, Sevilla o San Sebastián.'],
    ['¿Puedo recomendar cualquier tipo de restaurante en Matlyst?', 'Sí. Matlyst no está limitada a ningún tipo de cocina ni rango de precios. Desde el bar de tapas de toda la vida hasta el restaurante con estrella Michelin, todo tiene cabida si tú lo consideras una buena recomendación.'],
    ['¿Cómo sabe Matlyst qué restaurantes me van a gustar?', 'Matlyst construye tu perfil gastronómico a partir de tus preferencias, tus recomendaciones y las personas que sigues. Cuanto más la uses, más personalizado se vuelve tu feed de descubrimiento.'],
  ];
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">FAQ</span>
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className="faq">
          {items.map(([q,a],i)=>(
            <details className="faq__item" key={i} {...(i===0?{open:true}:{})}>
              <summary>
                <span>{q}</span>
                <span className="faq__icon"><Icon name="plus" size={16} stroke={2} /></span>
              </summary>
              <p className="faq__answer">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

window.FaqSection = FaqSection;
