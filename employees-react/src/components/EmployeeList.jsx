
import Employee from './Employee';

function EmploeeView({ Employeelist }) {

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
                    <th>Department</th>
                    <th>Gender</th>
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

export default EmploeeView;