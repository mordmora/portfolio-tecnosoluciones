import "../styles/components/Feedback.css";
import FeedbackCard from "./FeedbackCard";

const testimonials = [
	{
		id: "t1",
		rating: 5,
		comment:
			"TecnoSoluciones JI proporcionó una solución de software excepcional que transformó nuestras operaciones comerciales. Su experiencia y atención al detalle son inigualables..",
		name: "Daniel Bonnett",
		role: "Director de tecnología, TuMercado",
	},
	{
		id: "t2",
		rating: 5,
		comment:
			"Trabajar con TecnoSoluciones JI fue un cambio radical. Comprendieron nuestra visión a la perfección y superaron nuestras expectativas.",
		name: "Jesús Calderón",
		role: "Gerente de proyecto, SalesPoint",
	},
	{
		id: "t3",
		rating: 4,
		comment:
			"La aplicación web que GLAMTECH desarrolló para nosotros aumentó la interacción de nuestros usuarios en un 300 %. ¡Recomiendo ampliamente sus servicios!",
		name: "Martín Pallares",
		role: "Director creativo, Keyle’ Store",
	},
];

export default function Feedback() {
	return (
		<section className="feedback-container">
			<h2 className="feedback-title">Lo que dicen nuestros clientes</h2>
			<p className="feedback-description">
				No confíe solo en nuestras palabras: escuche a nuestros clientes
				satisfechos.
			</p>

			<div
				className="feedback-carousel"
				aria-label="Carrusel de testimonios"
			>
				<div className="feedback-track">
					{testimonials.map((t) => (
						<FeedbackCard
							key={t.id}
							rating={t.rating}
							comment={t.comment}
							name={t.name}
							role={t.role}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
