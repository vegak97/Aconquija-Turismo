const generalDescription = 'Aconquija es uno de esos lugares que sorprenden por su belleza y enamoran por su esencia. Un rincón privilegiado de Catamarca, donde las montañas, los bosques, los ríos y sus verdes paisajes crean postales únicas. Su riqueza no está solo en la naturaleza, sino también en su cultura, sus tradiciones y, sobre todo, en la calidez de su gente. Aconquija invita a conocer, recorrer y vivir cada paisaje, descubriendo un destino auténtico que guarda en cada rincón la esencia de Catamarca.'

export default function IntroSection() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-copy reveal">
          <div className="eyebrow">Aconquija - Catamarca - Argentina</div>
          <h2>"La luz de la luna sobre la nieve en las alturas"</h2>
          <p className="lead reveal">{generalDescription}</p>

          <div className="intro-stats">
            <div className="stat"><b>+5.500m</b><span>Altura de los Nevados</span></div>
            <div className="stat"><b>3.165</b><span>Habitantes</span></div>
            <div className="stat"><b>22</b><span>Localidades</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
