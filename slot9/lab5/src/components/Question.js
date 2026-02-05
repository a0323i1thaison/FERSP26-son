import { Form } from "react-bootstrap";

function Question({ data, onAnswer, selectedAnswer }) {
  return (
    <div className="p-3 border rounded bg-light">
      <h5>{data.question}</h5>
      {data.answers.map((ans, index) => (
        <Form.Check
          key={index}
          type="radio"
          label={ans}
          name="quiz-options"
          id={`q-${index}`}
          checked={selectedAnswer === ans}
          onChange={() => onAnswer(ans)}
          className="my-2"
        />
      ))}
    </div>
  );
}
export default Question;