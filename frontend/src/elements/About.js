import './beg_style.css';
import Nav from './Nav';

function About(){
    return(<>
            <div className='wrapper_beg'>
            <Nav />
            <div className='main_content_beg'>
                <h2>Purpose</h2>
                <br/>
                This website serves as a presentation of a project that is underway. It consists of an application that allows players of all platforms to find friends and create groups to play whatever they want. Within the website, the aim is to present basic information about the application, and some statistical data such as the most played games, suggestions, among others.
                <br/>
                <br/>
                <h2>Information (dataset)</h2>
                <br/>
                The data of real users will be used (once they are available) to be able to give specific rankings, such as by games, country, etc. At the moment, in this project, some tops are presented based on a dummy database, which presents punctuation and statistics of 3 games.
                <br/>
                <br/>
                <h2>Achieve goals</h2>
                <br/>
                Initially set objectives were achieved, such as a friendly interface with the user, the creation of accesses, and the presentation of information obtained from databases.
            </div>
        </div>
        </>
    );
}

export default About;