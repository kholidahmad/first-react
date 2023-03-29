import React, {Component} from "react";
import YoutubeComp from "../../component/Youtube/YoutubeComponent";

// contoh statefull component
class Home extends Component {
    render() {
        return (
            <div class="flex-container">
                <YoutubeComp nama="Abdul" job="Web Dev" desc="Mengerjakan proyek sistem 1"/>
                <YoutubeComp nama="Bida" job="UI/UX" desc="Mengerjakan proyek sistem 2"/>
                <YoutubeComp nama="Caca" job="QA" desc="Mengerjakan proyek sistem 3"/>
                <YoutubeComp />
            </div>
        )
    }
}

export default Home;