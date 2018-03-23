import React, {Component} from 'react';
import Skill from './skill';

export default class SkillShowcase extends Component {
    render() {
        return (
            <div className="row">
                {this.props.skills.map(skill => 
                    <div className="col-sm-6">
                        <Skill title={skill.title} percentage={skill.percentage} />
                    </div>
                )}
            </div>
        )
    }
}