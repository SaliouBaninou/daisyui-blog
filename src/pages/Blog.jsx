import { Card } from "../components/Card";
import { Spiner } from "../components/Spiner";
import { API_KEY } from "../config/config";
import { useFetch } from "../hooks/useFetch";

export function Blog() {
  const { data, loadind, error } = useFetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );

  return (
    <div className="w-full">
      <h1 className="text-2xl font-medium my-2">Liste des articles</h1>
      {loadind && <Spiner size="lg" />}
      {error && <p>Impossible de charger les articles</p>}
      {data && (
        <div className="w-full flex justify-center">
          <div className="max-w-4xl  m-auto grid grid-cols-1 p-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.articles.map((article) => (
              <Card
                key={article.title}
                title={article.title}
                description={article.description}
                image={article.urlToImage}
                href={article.url}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
