import { useState } from "react";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";

function App() {
  const [reload, setReload] = useState(false);

  const refresh = () => {
    setReload(!reload);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System</h1>

      <AddStudent refresh={refresh} />
      <hr />
      <StudentList reload={reload} />
    </div>
  );
}

export default App;