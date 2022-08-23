function Profile(props) {
  return (
    <div>
      <h1>Meu perfil {props.name} {props.match.params.id}</h1>
    </div>
  );
}

export default Profile;