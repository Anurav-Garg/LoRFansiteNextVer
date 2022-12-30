import { useEffect, useState } from "react";

export function MusicForm(props) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitudeIsValid, setLatitudeisValid] = useState(false);
  const [longitudeIsValid, setLongitudeisValid] = useState(false);

  const valueIsInvalid = function (value, range) {
    if (value === "" || isNaN(value) || value < -range || value > range) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    setLatitudeisValid(!valueIsInvalid(latitude, 90));
    setLongitudeisValid(!valueIsInvalid(longitude, 180));
  }, [latitude, longitude]);

  return (
    <form
      onSubmit={props.submissionHandler}
      className={`flex flex-col text-base text-center pt-8 pb-${
        props.selection === "yes" ? 36 : 4
      }`}
    >
      <label htmlFor="hitlist-priority-select" className="pb-4">
        Do you agree that Library of Ruina has the best OST in any game ever?
      </label>
      <select
        name="hitlist"
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

      {props.selection === "no" && (
        <div className="pt-8">
          <label className="py-4">
            Please enter your exact coordinates with as much precision as you
            are able to provide 😇
          </label>
          <div className="flex justify-center items-center pt-4">
            <div className="flex flex-col justify-center items-center md:px-16 px-8">
              <label className="pb-1">Your Latitude in degrees:</label>
              <input
                className="bg-inherit border-2 border-slate-300 w-20 text-lg"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
              <div
                className={`text-xs text-red-500 py-2 ${
                  latitudeIsValid ? "opacity-0" : "opacity-100"
                }`}
              >
                Please enter a numerical value between -90 and 90
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:px-16 px-8">
              <label className="pb-1">Your Longitude in degrees:</label>
              <input
                className="bg-inherit border-2 border-slate-300 w-20 text-lg"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
              <div
                className={`text-xs text-red-500 py-2 ${
                  longitudeIsValid ? "opacity-0" : "opacity-100"
                }`}
              >
                Please enter a numerical value between -180 and 180
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="submit"
        className={`py-1 my-2 text-xl ${
          props.selection === "no" && !(latitudeIsValid && longitudeIsValid)
            ? "text-gray-500 border-gray-500"
            : "text-yellow-400 hover:text-yellow-200 border-yellow-400 hover:border-yellow-200"
        } backdrop-blur-md border-2 w-24 rounded-lg mx-auto font-semibold transition-colors ease-in-out duration-150`}
        disabled={
          props.selection === "no" && !(latitudeIsValid && longitudeIsValid)
        }
      >
        Submit
      </button>
    </form>
  );
}
