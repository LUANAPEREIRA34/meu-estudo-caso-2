import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export default function ProductDetails() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://proweb.leoproti.com.br/produtos/${id}`)
      .then(response => setProduto(response.data))
      .catch(error => console.error('Erro ao buscar produto:', error));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <Container className="mt-4">
      <h1>{produto.nome}</h1>
      <p>Descrição: {produto.descricao}</p>
      <p>Preço: R$ {produto.preco}</p>
    </Container>
  );
}
