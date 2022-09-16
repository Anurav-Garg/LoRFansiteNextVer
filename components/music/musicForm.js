export function MusicForm(props) {
  return (
    <form
      onSubmit={props.submissionHandler}
      className="flex flex-col text-base text-center pt-8"
    >
      <label htmlFor="hitlist-priority-select" className="pb-4">
        Do you agree that Library of Ruina has the best OST in any game ever?
      </label>
      <select
        name="hitlist"
        id="hitlist-priority-select"
        className="bg-inherit border-2 border-slate-300 w-20 mx-auto backdrop-blur-md"
        value={props.selection}
        onChange={(e) => {
          props.selectionHandler(e.target.value);
        }}
      >
        <option value="yes" className="text-slate-700">
          Yes
        </option>
        <option value="no" className="text-slate-700">
          No
        </option>
      </select>

      <button
        type="submit"
        className="py-1 my-2 text-xl text-yellow-400 hover:text-yellow-200 backdrop-blur-md border-2 border-yellow-400 hover:border-yellow-200 w-24 rounded-lg mx-auto font-semibold transition-colors ease-in-out duration-150"
      >
        Submit
      </button>
    </form>
  );
}
