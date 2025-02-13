import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {useState} from 'react';
function AddEmployeeModal({ isAddmodalOpen, onCloseModal, onAddEmployee }) {

  const [formdata, setFormdata] = useState({

    name: '',
    email: '',
    address: '',
    phone: '',
    gender: '',
    department: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });

  }




  function handleSubmit(e) {
    e.preventDefault();

    onAddEmployee(formdata);
    onCloseModal();
    setFormdata({
      name: '',
      email: '',
      address: '',
      phone: '',
      gender: '',
      department: '',
    });
  }


  if (!isAddmodalOpen) {
    return null;
  }
  return (
    <>
      (
      <div id="addEmployeeModal" className="modal fade  show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Employee </h4>
              <button type="button" className="close" data-dismiss="modal" onClick={onCloseModal} aria-hidden="true">&times;</button>

            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} >
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" required name='name' value={formdata.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" required name='email' value={formdata.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea className="form-control" required name='address' value={formdata.address} onChange={handleChange} ></textarea>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" className="form-control" name='phone' required value={formdata.phone} onChange={handleChange} />
                </div>

                <div className="flex ">
                  <div className="form-group">
                    <label>Gender</label>
                    <input type="radio"
                      name='gender'
                      value="female"
                      checked={formdata.gender === 'female'}
                      onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <input type="radio"
                      value="male"
                      name='gender'
                      checked={formdata.gender === 'male'}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div className="form-group">
                  <label htmlFor='department'>Department</label>
                  <div>
                    <select name="department" value={formdata.department} onChange={handleChange}>
                      <option value="" disabled>Select a department</option>
                      <option value="IT">IT</option>
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                      <option value="Marketing">Marketing</option>
                    </select>
                  </div>

                </div>


                <div className="modal-footer">
                  <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                  <input type="submit" className="btn btn-success" />
                </div>

              </form>


            </div>
          </div>
        </div >
      </div >

      <div className="modal-backdrop fade show">
      </div>
      )
    </>

  );
}

export default AddEmployeeModal;
