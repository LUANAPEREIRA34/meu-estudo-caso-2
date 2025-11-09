import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductCard({ produto }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{produto.nome}</Card.Title>
        <Card.Text>Preço: R$ {produto.preco}</Card.Text>
        <Link to={`/produto/${produto.id}`}>
          <Button variant="primary">Ver detalhes</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}