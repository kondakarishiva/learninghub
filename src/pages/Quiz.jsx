const Quiz = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>📝 Quiz</h1>
      <p>Answer the questions below:</p>

      <form style={{ marginTop: "20px" }}>
        <p>1. What is React?</p>
        <input type="radio" name="q1" /> A Library <br />
        <input type="radio" name="q1" /> A Language <br />
        <input type="radio" name="q1" /> A Database <br />

        <br />
        <button type="submit" style={{ padding: "10px 20px" }}>Submit</button>
      </form>
    </div>
  );
};

export default Quiz;
