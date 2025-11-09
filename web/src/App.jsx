import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://proweb.leoproti.com.br/produtos";


function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setProdutos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);
        setErro("Erro ao carregar produtos.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="mt-4 container">Carregando produtos...</p>;
  if (erro) return <p className="mt-4 container text-danger">{erro}</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">📦 Lista de Produtos</h1>
      <div className="list-group">
        {produtos.map((produto) => (
          <Link
            key={produto.id}
            to={`/produto/${produto.id}`}
            className="list-group-item list-group-item-action"
          >
            {produto.nome} - R$ {produto.preco}
          </Link>
        ))}
      </div>
    </div>
  );
}


function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        setProduto(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produto:", err);
        setErro("Erro ao carregar produto.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="mt-4 container">Carregando detalhes...</p>;
  if (erro) return <p className="mt-4 container text-danger">{erro}</p>;

  return (
    <div className="container mt-4">
      <h1>{produto.nome}</h1>
      <p>Preço: R$ {produto.preco}</p>
      <Link to="/" className="btn btn-secondary mt-3">
        ← Voltar
      </Link>
    </div>
  );
}


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto/:id" element={<Produto />} />
    </Routes>
  );
}