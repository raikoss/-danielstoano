import React, {Component} from 'react';
import "./skill.css";

export default class Skill extends Component {
    render() {
        return (
            <div className="skill">
                <p className="skill-title">{this.props.title}</p>
                <div className="skill-bar">
                    <div className="skill-bar-percentage" style={{width: this.props.percentage + "%"}}></div>
                </div>
            </div>
        )
    }
}