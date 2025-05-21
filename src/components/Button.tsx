type props = {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  style: string;
};

const Button = ({ type = 'button', text, style }: props) => {
  return (
    <button type={type} className={style}>
      {text}
    </button>
  );
};

export default Button;
