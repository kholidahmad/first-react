import React from "react";
import './YoutubeComp.css'
import g1 from './g1.png'

// contoh stateless component
const YoutubeComp = (props) => {
    return (
            <div class="flex-items">
                <div class="card">
                    <div class="card-border-top">
                    </div>
                    <div class="img">
                        <img src={g1} alt="k1" />
                    </div>
                    <span>{props.nama}</span>
                <b class="job">{props.job}</b>
                <p class="desc">{props.desc}</p>
                    <button> Click
                    </button>
                </div>
            </div>
    )
}

YoutubeComp.defaultProps = {
    nama : '---',
    job : '-job-',
    desc : '-desc-',
}

export default YoutubeComp;