import toast from "react-hot-toast";
import { useState } from "react";

export const useAddOwner = () => {
  const [loading, setAddedOner] = useState(false);

  const AddOwnerfunction = async ({
    username,
    email,
    phoneNumber,
    RoomNumber,
    FloorNumber,
    City,
    Salary,
    Area,
    Descrebtion,
  }) => {
    console.log({
      username,
      email,
      phoneNumber,
      RoomNumber,
      FloorNumber,
      City,
      Salary,
      Area,
      Descrebtion,
    });
    const success = handleInputError({
      username,
      email,
      phoneNumber,
      RoomNumber,
      FloorNumber,
      City,
      Salary,
      Area,
      Descrebtion,
    });
    if (!success) {
      return;
    }
    setAddedOner(true);
    try {
      const response = await fetch("http://localhost:5000/owner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          username,
          email,
          phoneNumber,
          RoomNumber,
          FloorNumber,
          City,
          Salary,
          Area,
          Descrebtion,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json(); //

      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setAddedOner(false);
      console.log("Add owner successfully");
    }
  };

  return { loading, AddOwnerfunction };
};

function handleInputError({
  username,
  email,
  phoneNumber,
  RoomNumber,
  FloorNumber,
  City,
  Salary,
  Area,
  Descrebtion,
}) {
  if (
    !username ||
    !email ||
    !phoneNumber ||
    !RoomNumber ||
    !FloorNumber ||
    !City ||
    !Salary ||
    !Area ||
    !Descrebtion
  ) {
    toast.error("Please fill the required fields");
    return false;
  }
  return true;
}
