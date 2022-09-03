import './About.css';

const About = () => {
    return ( 
        <div className="about">
            <h3>WORKING OF THE APP</h3>
            <p>This is a simple application to record the readings of coin tosses. The basic working of this app is as follows-</p>
            <ul>
                <li>All consecutive readings of Heads are recorded in one single column</li>
                <li>All consecutive readings of Tails are recorded in a separate column</li>
                <li>When the reading changes from the previous one, a new column is created. Else, the reading is stored in the same column.</li>
            </ul>
        </div>
     );
}
 
export default About;
