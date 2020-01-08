import React from 'react';

export default class Form extends React.Component {
    state = {
        StartLocation: '',
        EndLocation: ''
    };

    change = e => {
        this.setState({
            [e.target.location]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            StartLocation: '',
            EndLocation: ''
        });
    };
    render() {
        return (
            <form>
                <input location="StartLocation" type="text"
                    placeholder='StartLocation'
                    value={this.state.Startlocation}
                    onchange={e => this.change(e)}
                />
                <br />
                <input
                    location="EndLocation"
                    type="text"
                    placeholder='EndLocation'
                    value={this.state.EndLocation}
                    onchange={e => this.change(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}
