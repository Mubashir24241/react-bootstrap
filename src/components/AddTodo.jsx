function AddTodo() {

    return (

        <div className="container ">
            <div className="row kg-row">

                <div className="col-6">
                    <input type="text" placeholder="Enter ToDo Here..."></input>
                </div>

                <div className="col-4">
                    <input type="date">
                    </input>
                </div>

                <div className="col-2 kg-btn ">
                    <button type="button" class="btn btn-success">Add</button>
                </div>

            </div>
        </div>


    )

}

export default AddTodo;