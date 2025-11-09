import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('https://proweb.leoproti.com.br/produtos/listarTodos')
      .then(response => setProdutos(response.data))
      .catch(error => console.error('Erro ao carregar produtos:', error));
  }, []);

  return (
    <Container className="mt-4">
      <h1>Lista de Produtos</h1>
      <Row>
        {produtos.map(produto => (
          <Col key={produto.id} md={4} className="mb-3">
            <ProductCard produto={produto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
