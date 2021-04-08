import React from 'react';
import './Home.css';
import mapSnippet from './mapSnippet.png';
import reactLogo from './logo512.png';
import jsLogo from './jsLogo.svg';
import scikitLogo from './scikitLogo.png';

export default class Home extends React.Component {
    componentDidMount() {
        var problemObserver = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                entries[0].target.setAttribute('style', 'animation-name: slide-from-left; animation-duration: 1s;');
            }
        }, { threshold: [0] });
        var solutionObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.setAttribute('style', 'animation-name: slide-from-right; animation-duration: 1s;');
            }
        })
        var sacramentoObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.setAttribute('style', 'animation-name: slide-up; animation-duration: 1s;');
            }
        })
        
        problemObserver.observe(document.getElementById("#problem"));
        solutionObserver.observe(document.getElementById("#solution"));
        sacramentoObserver.observe(document.getElementById("#why-sacramento"));
    }
    render() {
        return (
            <div className="Home backmost-card">
                <header>
                    <h1 style={{fontSize:"40"}}>MappingForGood</h1>
                </header>
                <main>
                    <div className="box-1" id="#problem">
                        
                        <div className="box-1-left card">
                            <h2 >The Problem</h2>
                            <p>
                            Poverty is a persistent problem in the United States and affects over 43 million Americans living in poverty according to the US Census and with the emergence of Covid-19 that number has grown due to the economic recession. In hope of trying to solve this issue in Sacramento our team created a web app that maps areas in Sacramento that need aid so that government agencies and non-profit organizations can provide the necessary aid to those people. We also implemented a message board so that regions that may have been overlooked by federal data sets can communicate their needs.
                            </p>
                        </div>
                        <div className="box-1-right">
                            <img src="https://kubrick.htvapps.com/vidthumb/0d8ba403-2af2-4608-9f85-967929330f74/0d8ba403-2af2-4608-9f85-967929330f74_image.jpg?crop=0.775xw:0.774xh;0.0718xw,0" alt="Picture of homelessness"></img>
                        </div>
                    </div>
                    <div className="box-2" id="#solution">
                        <div className="box-2-left">
                            <img src={mapSnippet} alt="Picture of map" width="90%"></img>
                        </div>
                        <div className="box-2-right card">
                            <h2>The Solution</h2>
                            <p>To help solve this problem, we created a map that maps poverty across the city of 
                                Sacramento, CA. Some metrics we used were:</p>
                            <ul>
                                <li>Food deserts are areas with limited access to nutritious and affordable food.
                                    In particular an area is classified as a food desert if a neighborhood is more than 1 mile away from a supermarket.
                                </li>
                                <li>Income data from the US census to determine areas of economic inequity</li>
                            </ul>
                            <p>Our team used these metrics to decide whether a region in Sacramento needed aid. One of the metrics we used was income since areas of low income often lack the resources necessary to provide the people with a better lifestyle. We also use the metric of determining whether an area is a food desert. An area is classified as a food desert if there are no supermarkets present within a 1-mile radius of the area. These areas are often overlooked by supermarket companies as the consumer base is unable to afford food and thus the people are unable to access healthy meals.
                            </p>
                        </div>
                    </div>
                    <div className="box-3" id="#why-sacramento">
                        <div className="card">
                            <h2>Why This?</h2>
                            <p>
                            The Sacramento Community College student on our team frequently saw the effects of economic inequality in Sacramento from and its effect on the people living in the city such as the large amount of homeless camps and the differences in living conditions that span across various neighborhoods within Sacramento and was motivated to create a web app that aimed to solve some of these problem by pinpointing areas within Sacramento that needed aid and directing government agencies and nonprofit organizations to provide aid to these areas. The other members of our team were overjoyed to take on a project that would focus on a fulfilling goal of improving the living conditions of others. From this project our team learned the importance of diversity of thought.
                            </p>
                            <br></br><br></br><br></br>
                            <h2>The Team</h2>
                            <p>Our team was composed of two groups of differing backgrounds, one that had knowledge in data science and another that had knowledge in web development. The differing skill sets and experiences of the members of our team allowed us the opportunity to create a unique application that utilized different technologies allowing us to learn from one another.</p>
                            <div className="logos" >
                                <img src={reactLogo} width="10%"/>
                                <img src={jsLogo} width="10%" />
                                <img src={scikitLogo} width="30%" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}