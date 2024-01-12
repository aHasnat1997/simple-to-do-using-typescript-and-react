import Form from "./components/Form";
import ListTable from "./components/ListTable";

function App() {
  return (
    <>
      <h1>My simple To-Do</h1>
      <div className="container">
        <Form />
        <ListTable />
      </div>
    </>
  )
}

export default App;