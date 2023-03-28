import { ChangeEvent, FC } from "react";
import { GenreAnswer } from "../../types/question";

type GenreQuestionItemProps = {
  answer: GenreAnswer;
  id: number;
  onChange: (id: number, value: boolean) => void;
  renderPlayer: (path: string, playerIndex: number) => JSX.Element;
  userAnswer: boolean;
}

const GenreQuestionItem: FC<GenreQuestionItemProps> = ({answer, id, onChange, renderPlayer, userAnswer}) => {

  return (
    <div className="track">
      {renderPlayer(answer.src, id)}
      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value={`answer-${id}`}
          id={`answer-${id}`}
          checked={userAnswer}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => {
            const value = target.checked;
            onChange(id, value);
          }}
        />
        <label
          className="game__check"
          htmlFor={`answer-${id}`}
        >
          Отметить
        </label>
      </div>
    </div>
  );
}

export default GenreQuestionItem;
