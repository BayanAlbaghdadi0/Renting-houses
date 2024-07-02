import React, { useState, useContext } from 'react';

const FormContext = React.createContext();

function MyComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // ... الحالات الأخرى

  const handleSubmit = () => {
    // قم بتخزين الحالات في الـ context
    // يمكنك إنشاء كائن يحتوي على جميع البيانات وتخزينه في الـ context
    const formData = {
      name,
      email,
      phoneNumber,
      // ... البيانات الأخرى
    };
    // قم بتخزين البيانات في context
    // يمكنك استخدام setState من useContext لتحديث حالة الـ context
  };

  return (
    <FormContext.Provider value={{ name, email, phoneNumber }}>
      <form className="mt-4 m-auto flex flex-col gap-6 w-1/2">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            className="grow"
            placeholder="bayan"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            type="text"
            className="grow"
            placeholder="email@.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Phone Number
          <input
            type="text"
            className="grow"
            placeholder="09"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        {/* إضافة المزيد من الحقول هنا */}
        <button
          onClick={handleSubmit}
          className="btn btn-outline btn-success flex items-center w-1/2 m-auto font-bold p-2"
        >
          next
        </button>
      </form>
    </FormContext.Provider>
  );
}
