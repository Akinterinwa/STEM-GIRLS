import { Component } from 'react';
import '../components/pages/home-content/Mission.css';

class MissionData extends Component {
    render() {
        return (
            <div className="first-des">
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className="image">
                <img src={this.props.img1} alt='img' />
                <img src={this.props.img2} alt='img' />
            </div>
        </div>
        )
    }
}

export default MissionData;