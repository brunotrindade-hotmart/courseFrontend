import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..."></input>
      <button type="button">Adicionar</button>
      <Card name="Bruno Carvalho" time="10:19:30"/>
      <Card name="Joao Silva" time="11:19:30"/>
      <Card name="Ana Siqueira" time="12:19:30"/>
    </div>
  )
}
