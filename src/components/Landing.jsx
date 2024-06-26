import '../css/landing.css';
import main from '../assets/landingbg.png';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    return(
        <div className="landing">
                <span className="left">
                    <div className="caption1">
                        <hr />
                        <h4>WE ARE SOSOYO</h4>
                    </div>
                    <div className="titles">
                        <div className="caption2">
                            <p>At Solution to the Society Youth Organization<span>(SOSOYO)</span> </p>
                        </div>
                        <div className="caption3">
                            <p>We engage, educate, and empower young individuals through innovative programs and initiatives that address civic, climate, environmental, health, and skills development issues, thereby contributing to the overall well-being and progress of the community.</p>
                        </div>
                        <div className="btns">
                            <button onClick={() => navigate('/about')} type="button" className="btn btn-outline-info">Know More</button>
                            {/* <button type="button" className="btn btn-success" onClick={()=>navigate("/donate")}>DONATE</button> */}
                        </div>
                    </div>

                </span>
                <span className="right">
                    <img src={main} alt="Smiling Faces" />
                </span>
            </div>
    );
}