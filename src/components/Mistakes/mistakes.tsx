import { FC } from "react";

type MistakesProps = {
  count: number;
};

const Mistakes: FC<MistakesProps> = ({count}) => {
  const mistakes = Array.from({length: count}, () => '');

  return (
    <div className="game__mistakes">
      {mistakes.map((_item, index) => {
        const keyValue = `mistake-${index}`;
        return <div key={keyValue} className="wrong" />;
      })}
    </div>
  );
}

export default Mistakes;
