import React from 'react'
import Sidebar from '../../components/Sidebar/'


export default function index() {
    return (
        <>
            <main className="container-fluid">
                <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-10 rounded my-5 py-3 px-4 book-effect">
                        <h1 className="header-font">Contact me at twowoodenspoons@gmail.com</h1>
                        <form>

                            <div className="form-group">
                                <label for="input-name">Name:</label>
                                <input type="name" className="form-control" id="input-name" placeholder="Enter Name" />
                            </div>


                            <div className="form-group">
                                <label for="input-email-1">Email address:</label>
                                <input type="email" className="form-control" id="input-email-1" aria-describedby="emailHelp"
                                    placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label for="comment">Comment:</label>
                                <textarea className="form-control" rows="5" id="comment" placeholder="Your thoughts"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>

                    </div>
                    <Sidebar/>
                </div>
            </main>
        </>
    )
}
