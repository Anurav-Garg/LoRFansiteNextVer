export function SurveyForm({ selection, setSelection, setFormSubmission }) {
  return (
    <form
      className="text-base text-center flex flex-col"
      onSubmit={() => setFormSubmission(selection)}
    >
      <label htmlFor="masochism-level-select"> Your Answer:</label>
      <select
        className="bg-inherit border-2 border-slate-300 w-20 mx-auto backdrop-blur-md"
        value={selection}
        onChange={(e) => {
          setSelection(e.target.value);
        }}
      >
        <option value="no" className="text-slate-700">
          No
        </option>
        <option value="yes" className="text-slate-700">
          Yes
        </option>
      </select>
      <div className="py-2">
        <button
          type="submit"
          className="py-1 text-xl text-yellow-400 backdrop-blur-md border-2 border-yellow-400 w-24 rounded-lg mx-auto font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
