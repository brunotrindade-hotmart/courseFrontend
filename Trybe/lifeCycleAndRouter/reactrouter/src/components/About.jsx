import { Link } from 'react-router-dom';

function About() {
  
  return (
    <div>
      <span>Se meu navio de React é o de Teseu e eu refatorei todos os seus componentes, ele ainda é o meu navio?</span>
      <Link to="/">Voltar à Home</Link>
    </div>
  );
}

export default About;