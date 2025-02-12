export function Card({ image, title, description, href }) {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={href} className="btn btn-primary" target="_blank">
            Voir l'article
          </a>
        </div>
      </div>
    </div>
  );
}
