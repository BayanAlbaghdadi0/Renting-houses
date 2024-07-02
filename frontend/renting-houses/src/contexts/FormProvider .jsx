<<<<<<< HEAD
import React, { createContext, useState } from "react";
export const FormContext = createContext();
export const FormProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedCity, setSelectedCity] = useState("Damascus");
    const [salary, setSalary] = useState("");
    const [area, setArea] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [floorHeight, setFloorHeight] = useState("");
    const [description, setDescription] = useState("");
  
    const values = {
      name,
      setName,
      email,
      setEmail,
      password,
      setPassword,
      phoneNumber,
      setPhoneNumber,
      selectedCity,
      setSelectedCity,
      salary,
      setSalary,
      area,
      setArea,
      bedrooms,
      setBedrooms,
      floorHeight,
      setFloorHeight,
      description,
      setDescription,
    };
  
    return (
      <FormContext.Provider value={values}>{children}</FormContext.Provider>
    );
  };
=======
// import React, { createContext, useState } from "react";
// export const FormContext = createContext();
// export const FormProvider = ({ children }) => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [selectedCity, setSelectedCity] = useState("Damascus");
//     const [salary, setSalary] = useState("");
//     const [area, setArea] = useState("");
//     const [bedrooms, setBedrooms] = useState("");
//     const [floorHeight, setFloorHeight] = useState("");
//     const [description, setDescription] = useState("");
  
//     const values = {
//       name,
//       setName,
//       email,
//       setEmail,
//       password,
//       setPassword,
//       phoneNumber,
//       setPhoneNumber,
//       selectedCity,
//       setSelectedCity,
//       salary,
//       setSalary,
//       area,
//       setArea,
//       bedrooms,
//       setBedrooms,
//       floorHeight,
//       setFloorHeight,
//       description,
//       setDescription,
//     };
  
//     return (
//       <FormContext.Provider value={values}>{children}</FormContext.Provider>
//     );
//   };
>>>>>>> 5f38a567ce4ffe2be86ae3ddad7792126166ccc6
