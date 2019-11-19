import React, {Component} from 'react';
import { deleteJob } from '../../../Store/Actions/JobActions'
import { connect } from 'react-redux'

class JobItem extends Component {

    onDelete = (id) => {
        
        this.props.deleteJob(id);

    }

    render(){

        const { id, title, description, requirement } = this.props
        
        return (
            
            <div className="card bg-light" > 
            <h3 className="text-primary text-left">
                {title}
            </h3>
            <ul className="list">
                {description && (
                    <li>
                        {description}
                    </li>
                )}
                {requirement && (
                    <li>
                        {requirement}
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => this.onDelete(id)} >Delele</button>
    
            </p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteJob: data => dispatch(deleteJob(data))
    }
}

export default connect(null, mapDispatchToProps)(JobItem); 
