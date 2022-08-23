import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
          <h1>Minha homepage</h1>
          <Link to="/about">About</Link>
      </div>  
    );
}

export default Home;