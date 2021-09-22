const messages = [
    "Incluso cuando te tomas unas vacaciones de la tecnología, la tecnología no se toma un descanso de ti. Douglas Coupland.",
    "Sé bueno con los nerds. Es muy probable que termines trabajando para uno de ellos",
    "Para crecer, necesitas traicionar las expectativas de los demás. Hayao Miyazaki.",
    "Los principales productos de la economía del siglo XXI no serán los textiles, vehículos y armas, sino más bien cuerpos, cerebros y mentes. Yuval noah",
    "Un punto  y coma (;) perdido puede ser un verdadero quebradero de cabeza",
    "Programador: Persona que tiene relaciones más duraderas y profundas con una computadora que con otra persona",
    "Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza.  Paul Lear"
]

const randomMessage = () => {
    const message = messages[Math.floor(Math.random*messages.length)];
    console.log(message);
}

module.exports = {randomMessage};