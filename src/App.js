import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Avatar />
      <Link nome="Link 1" link="instagram.com/matmaderios" />
      <Link nome="Link 2" />
      <Link nome="Link 3" />
      <Link nome="Link 4" />
      <Footer />
    </div>
  );
}

const Link = (props) => {
  console.log(props);
  return (
    <div className="link">
      <p>
        <a href="www.google.com" target="_blank">
          {props.nome}
        </a>
      </p>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="avatar">
      <img
        className="avatar-imagem"
        src="https://png.pngtree.com/png-clipart/20210520/ourmid/pngtree-small-eye-handsome-boys-colorless-character-avatar-png-image_3286527.jpg"
        alt="avatar"
      />
      <p className="insta">@instagram</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
    </footer>
  );
};
