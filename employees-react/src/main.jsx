import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./index.css"


const dataEmployees = [
  {
    id: 1,
    name: "Thomas Hardy",
    email: "thomashardy@mail.com",
    address: "89 Chiaroscuro Rd, Portland, USA",
    phone: "(171) 555-2222",
  },
  {
    id: 2,
    name: "Dominique Perrier",
    email: "dominiqueperrier@mail.com",
    address: "Obere Str. 57, Berlin, Germany",
    phone: "(313) 555-5735",
  },
  {
    id: 3,
    name: "Maria Anders",
    email: "mariaanders@mail.com",
    address: "25, rue Lauriston, Paris, France",
    phone: "(503) 555-9931",
  },
  {
    id: 4,
    name: "Fran Wilson",
    email: "franwilson@mail.com",
    address: "C/ Araquil, 67, Madrid, Spain",
    phone: "(204) 619-5731",
  },
  {
    id: 5,
    name: "Martin Blank",
    email: "martinblank@mail.com",
    address: "Via Monte Bianco 34, Turin, Italy",
    phone: "(480) 631-2097",
  },
];



function App() {

  const [Employeelist, setEmployeelist] = useState(dataEmployees);
  const [isAddmodalOpen, setIsAddmodalOpen] = useState(false);

  function openModal() {
    console.log('openModal');
    setIsAddmodalOpen(true);
  }

  function closeModal() {

    setIsAddmodalOpen(false);

  }
  return (

    <div className="container">
      <div className="table-wrapper">
        <AddEmployeeModal isAddmodalOpen = {isAddmodalOpen} onCloseModal = {closeModal}  />
        <Header  onModalOpen = {openModal} />
        <EmploeeList Employeelist={Employeelist} />
      </div>

    </div>
  )

}



function Header({onModalOpen}) {


  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>Manage <b>Employees</b></h2>
        </div>
        <div className="col-sm-6">
          <a href="#addEmployeeModal" className="btn btn-success" onClick={onModalOpen} data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
          <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>
        </div>
      </div>
    </div>
  )

}


function EmploeeList({ Employeelist }) {


  return (

    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input type="checkbox" id="selectAll" />
              <label htmlFor="selectAll"></label>
            </span>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

        {Employeelist.map((props) => (
          <Employee data={props} key={props.id} />
        ))}
      </tbody>
    </table>

  )

}

function AddEmployeeModal({isAddmodalOpen, onCloseModal}) {
  if (!isAddmodalOpen) {
    return null;
  }
  return (
    <>
       (
      <div id="addEmployeeModal" className="modal fade  show">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
                <button type="button" className="close" data-dismiss="modal"  onClick={onCloseModal} aria-hidden="true">&times;</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show">

      </div>
      )
    </>

  );
}



function Employee({ data }) {
  console.log(data)
  return (
    <tr>
      <td>
        <span className="custom-checkbox">
          <input type="checkbox" id="checkbox1" name="options[]" value="1" />
          <label htmlFor="checkbox1"></label>
        </span>
      </td>
      <td>{data.id}</td>
      <td> {data.email}</td>
      <td> {data.address} </td>
      <td>{data.phone}</td>
      <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
      </td>
    </tr>
  )

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
