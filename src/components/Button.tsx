type props = {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  style: string;
  onClick?: () => void;
};

const Button = ({ type = 'button', text, style, onClick }: props) => {
  return (
    <button onClick={onClick} type={type} className={style}>
      {text}
    </button>
  );
};

export default Button;
