import React, { Component } from 'react';
import logo from './logo.svg';
import SkillShowcase from "./components/skillShowcase";
import './page.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			skills: [
				{
					title: "C#", 
					percentage: 100
				}, {
					title: "Java", 
					percentage: 90
				}, {
					title: "React", 
					percentage: 80
				}, {
					title: "JavaScript", 
					percentage: 70
				}, {
					title: "Node", 
					percentage: 60
				}, {
					title: "C", 
					percentage: 70
				}, {
					title: "C++", 
					percentage: 70
				}, 
			]
		};

		this.state.skills.sort((skill1, skill2) => {return skill2.percentage - skill1.percentage});
	}

	render() {
		return (
			<div className="App">
				<div className="container" style={{backgroundColor: "#FFFFFF"}} >
					<div className="image-container">
						<img src="https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png" style={{height: "400px"}} />
					</div>
					<div className="intro-container">
						<p>Her står det masse kult om meg as! Snakkes aldri</p>
					</div>
					<div className="skills-container">
						<h1>Se på mine kule skills</h1>
						<SkillShowcase skills={this.state.skills} />
					</div>
					<div className="experience-container">

					</div>
					<div className="contact-container">

					</div>
				</div>
			</div>
		);
	}
}

export default App;
