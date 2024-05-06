import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import GetEmployee from "./components/GetEmployee";
import AddEmployee from "./components/AddEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

const Body = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<GetEmployee />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/delete" element={<DeleteEmployee />} />
          <Route path="/update" element={<UpdateEmployee />} />
        </Routes>
    </>
  );
};
export default Body;
