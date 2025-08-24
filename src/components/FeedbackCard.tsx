type Props = {
  rating: number;
  comment: string;
  name: string;
  role: string;
};

export default function FeedbackCard({ rating, comment, name, role }: Props) {
  return (
    <article className="feedback-card">
      <div className="feedback-stars" aria-label={`${rating} de 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className={i < rating ? "filled" : ""}
            role="img"
            aria-hidden={i >= rating}
          >
            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.211l8.2-1.193L12 .587z" />
          </svg>
        ))}
      </div>

      <p className="feedback-comment">{comment}</p>

      <div className="feedback-author">
        <span className="feedback-name">{name}</span>
        <span className="feedback-role">{role}</span>
      </div>
    </article>
  );
}
