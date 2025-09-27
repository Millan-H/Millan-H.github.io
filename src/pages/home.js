import React from 'react'
import './styles/home.css'
import img from '../assets/image.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='firstRow'>
                <div className='bioInfo'>
                    <img src={img} />
                    <div className='links'>
                        <a href='https://github.com/Millan-H?tab=repositories'>GitHub</a>
                    </div>
                    <p><b>Name:</b>  Millan Hamilton</p>
                    <p><b>Email:</b> millan [dot] parikh [dot] hamilton [at] gmail [dot] com</p>
                    <p>Currently a Student at Gretchen Whitney High School</p>
                    <p>Treasurer & FTC Programmer, Whitney High School Robotics</p>
                    <p>Director of Technology, Cyberpatriots</p>
                    <p>Independent ML Researcher (see one of my projects <a href='https://pgelu-analysis.vercel.app' target='_blank'>here</a>)</p>
                    <br />
                    <p>ML Enthusiast</p>
                    <p>日本語を　ならって　います</p>
                </div>
                <p>Hello! I'm Millan Hamilton, a student at Gretchen Whitney High School.</p>
            </div>
        </div>
    )
}

export default Home;