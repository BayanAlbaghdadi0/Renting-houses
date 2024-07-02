import React, { useState, useContext } from 'react';

const FormContext = React.createContext();

function MyComponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Damascus');
  const [salary, setSalary] = useState('');
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [floorHeight, setFloorHeight] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // يمكنك تخزين القيم في الـ context هنا
  };

  return (
    <FormContext.Provider
      value={{
        selectedFile,
        selectedCity,
        salary,
        area,
        bedrooms,
        floorHeight,
        description,
      }}
    >
      <form className="space-y-4 flex flex-col items-center justify-center mt-4 w-full">
        <div className="">
          <div className="form-control w-full ">
            <input
              type="file"
              className="file-input file-input-bordered"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">Select city</label>
            <select
              className="select select-secondary"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {/* ... options */}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <label className="input input-bordered flex items-center gap-2">
            Salary
            <input
              type="number"
              className="grow"
              placeholder="$"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </label>
          {/* ... الحقول الأخرى */}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">Description</label>
          <textarea
            className="textarea textarea-info"
            placeholder="Bio"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {/* زر الإرسال */}
      </form>
    </FormContext.Provider>
  );
}
