import React, {Component} from 'react';
import Skill from './skill';

export default class SkillShowcase extends Component {
    renderSkill(skill) {
        return (
            <div className="col-sm">
                <Skill title={skill.title} percentage={skill.percentage} />
            </div>
        )
    }

    renderRows() {
        const skills = this.props.skills;
        let preparedSkill = null;
        let skillRows = null;

        skills.map((skill, index) => {
            if (index % 2 === 0) {
                preparedSkill = skill;
            } else {
                skillRows === null ? skillRows =
                <div className="row">
                    {this.renderSkill(preparedSkill)}
                    {this.renderSkill(skill)}
                </div>
                : skillRows += 
                <div className="row">
                    {this.renderSkill(preparedSkill)}
                    {this.renderSkill(skill)}
                </div>
            }
            console.log(skillRows);
        });

        return skillRows;
    }

    render() {
        return (
            this.renderRows()
        )
    }
}