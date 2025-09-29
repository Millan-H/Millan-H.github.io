import React from 'react'
import './styles/home.css'
import Project from '../elements/project/index.js'
import img from '../assets/image.png'
import pgelu from '../assets/pgelu.png'
const Home = () => {
    return (
        <div className='home'>
            <div className='firstRow'>
                <div className='bioInfo'>
                    <img src={img} />
                    <div className='links'>
                        <a href='https://github.com/Millan-H?tab=repositories' target='_blank'>GitHub</a>
                        <a href='https://www.linkedin.com/in/millan-hamilton-83595b342/' target='_blank'>LinkedIn</a>
                    </div>
                    <h1>Millan Hamilton</h1>
                    <p><b>Email:</b> millan [dot] parikh [dot] hamilton [at] gmail [dot] com</p>
                    <p>Currently a Student at Gretchen Whitney High School</p>
                    <p>Treasurer & FTC Programmer, WHS Robotics</p>
                    <p>Director of Technology, WHS Cyberpatriots</p>
                    <p>Independent ML Researcher (see one of my projects <a href='https://pgelu-analysis.vercel.app' target='_blank'>here</a>)</p>
                    <br />
                    <p>ML Enthusiast</p>
                    <p>日本語を　ならって　います</p>
                </div>
                <h1 className='bio'>Bio</h1>
                <div className='paragraphs'>
                    <p>Hello! I'm Millan Hamilton, a student at Gretchen Whitney High School.</p>
                    <br />
                    <p>I'm incredibly interested by a variety of topics in CS, particularly machine leanring, artificial intelligence, but also optimization and computer architecture and a bit of cybersecurity and networking. I enjoy contributing to ML research where possible, and am actively looking for mentors (if anyone's interested, shoot me an email!). I also enjoy industrial and applied ML, especially agentic AI and applied RL.</p>
                </div>
            </div>
            <div className='projectHighlights'>
                <h1>Project Highlights</h1>
                <Project title='PGELU Research' desc='Developed a novel parametric version of GELU, currently testing on CIFAR 10/100 with basic CNNs (0.5,1.5,5m parameters) and ResNets 18 and 34 across 4 different baselines. Showing 26.8% epoch reductions to convergence on CIFAR-10 and 50% accuracy standard deviation reductions. Planning for peer review submission at CVPR Workshops 2025-2026, results pending.' projectLink='https://pgelu-analysis.vercel.app' projectLinkName='Results Website' img={pgelu} />
            </div>
        </div>
    )
}

export default Home;