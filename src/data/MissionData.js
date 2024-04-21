import { Component } from 'react';
import '../components/pages/home-content/Mission.css';
import { Link } from 'react-router-dom';

class MissionData extends Component {
    render() {
        return (
            <div className="first-des">
                <div className="des-text">
                    <p>{this.props.text}</p>
                    <div style={{ paddingTop: '2rem' }}></div>
                    <Link to="/Volunteer">
                    <button className="btn-1 button">Become A Mentor</button>
                    </Link>
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