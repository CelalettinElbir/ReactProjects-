import { useState } from 'react';
import AddEmployeeModal from './components/AddEmployeeModal';
import Header from './components/Header';
import { dataEmployees } from './main';
import EmploeeView from './components/employeeList';
function App() {

    const [Employeelist, setEmployeelist] = useState(dataEmployees);
    const [isAddmodalOpen, setIsAddmodalOpen] = useState(false);

    function openModal() {
        setIsAddmodalOpen(true);
    }

    function closeModal() {

        setIsAddmodalOpen(false);

    }

    function AddEmployee(formdata) {

        const newEmployee = {
            id: Employeelist.length + 1,
            name: formdata.name,
            email: formdata.email,
            address: formdata.address,
            phone: formdata.phone,
            gender: formdata.gender,
            department: formdata.department
        }

        setEmployeelist([...Employeelist, newEmployee]);
    }

    return (
        <div className="container">
            <div className="table-wrapper">
                <AddEmployeeModal isAddmodalOpen={isAddmodalOpen} onCloseModal={closeModal} onAddEmployee={AddEmployee} />
                <Header onModalOpen={openModal} />
                <EmploeeView Employeelist={Employeelist} />
            </div>

        </div>
    )

}


export default App;