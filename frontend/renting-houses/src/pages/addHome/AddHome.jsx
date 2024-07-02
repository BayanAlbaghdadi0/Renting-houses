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
<<<<<<< HEAD
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
=======
    <div>
      <div
        tabIndex={0}
        className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse mt-4 m-auto w-2/3"
      >
        <div className="collapse-title">There is little left</div>
        <div className="collapse-content">
          <p>
            Fill in the home details and the process will be completed
            successfully
          </p>
        </div>
      </div>
>>>>>>> 2f546a0924c68fe6913c01c55afa7c26abca90e0
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
<<<<<<< HEAD
            <input
              type="number"
              className="grow"
              placeholder="$"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
=======
            <input type="number" className="grow" placeholder="$" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <PiMapPinAreaFill />
            <input type="number" className="grow" placeholder="Area" />
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-4 ">
          <label className="input input-bordered flex items-center gap-2">
            <MdBedroomParent />
            <input type="number" className="grow" placeholder="5" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <BsBuildingsFill />
            <input type="number" className="grow" placeholder="flor hight" />
>>>>>>> 2f546a0924c68fe6913c01c55afa7c26abca90e0
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
<<<<<<< HEAD
        {/* زر الإرسال */}
=======
        <Link to="/">
          <button className="btn btn-outline btn-success">Success</button>
        </Link>
>>>>>>> 2f546a0924c68fe6913c01c55afa7c26abca90e0
      </form>
    </FormContext.Provider>
  );
}
