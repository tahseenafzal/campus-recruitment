import React from 'react'

const JobItem = () => {
    return (
        <div className="card bg-light" > 
        <h3 className="text-primary text-left">
            {title}
        </h3>
        <ul className="list">
            {email && (
                <li>
                    {description}
                </li>
            )}
            {email && (
                <li>
                    {requirement}
                </li>
            )}
        </ul>
        <p>
            <button className="btn btn-dark btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm">Delele</button>

        </p>
        </div>
    )
}

export default JobItem 
