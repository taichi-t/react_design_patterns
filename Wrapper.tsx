import * as React from 'react';

type RenderProps = {
  text: string;
  handleSubmit: (e:React.SyntheticEvent) => void;
};

type Props = {
  children(args: RenderProps): React.ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  const [text, setText] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(text);
    setText("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={text}/>
      {children({
        text,
        handleSubmit,
      })}
      <button type="submit">submit</button>
    </form>
  );
};

export default React.memo(Wrapper);
