import React from "react";
import Card from "../Card/Card"
import Paginator from "../Paginator/Paginator"
import { cardsList } from "../utils/cards-list";
import { imgList } from "../utils/image_page";

function Main() {


    return (
        <>
            <section class="main">
                <div class="middle">
                    <div class="studying">
                        <h1><span class="studying_color">Studying</span> Online is now much easier</h1>
                        <p class="studying_title">
                            Skilline is an interesting platform that will teach you in more an interactive way
                        </p>
                        <button>Join for free</button>
                        <p class="play_free">Watch how it works</p>
                    </div>
                    <div class="women_messanger">
                        <img class="assisted" src={imgList.Group} alt="" />
                        <img class="cong" src={imgList.Group1} alt="" />
                        <img class="user" src={imgList.Group2} alt="" />
                        <img class="icon" src={imgList.Group3} alt="" />
                    </div>
                </div>
                <p class="title_worldwide">Trusted by 5,000+ Companies Worldwide</p>
                <div class="companies">
                    <img src={imgList.Google} alt="" />
                    <img src={imgList.Netflix} alt="" />
                    <img src={imgList.Airbnb} alt="" />
                    <img src={imgList.Amazon} alt="" />
                    <img src={imgList.Facebook} alt="" />
                    <img src={imgList.Grab} alt="" />
                </div>
            </section>
            <div class="cloud_software">
                <h2 class="skilline_software">All-In-One <span class="skilline_software_color">Cloud Software.</span></h2>
                <p class="cloud_software_title">
                    Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
                </p>
            </div>
            <section class="software">
                <div class="nameplate">                
                    {cardsList.map((card, i) => {                        
                        return (                           
                        <Card key={i} title={card.title} description={card.description} img={card.img}/>
                    )                     
                    })}
                </div>
            </section>
            <section class="online_classes ">
                <div class="question">
                    <h2 class="what">
                        What is <span class="what_color">Skilline?</span>
                    </h2>
                    <p class="what_title">
                        Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    </p>
                </div>
                <div class="grid2">
                    <div class="grid_section1">
                        <img src={imgList.Group4} alt="" />
                        <p class="slide1">FOR INSTRUCTORS</p>
                        <button class="button2">Start a class today</button>
                    </div>
                    <div class="grid_section2">
                        <img src={imgList.Group5} alt="" />
                        <p class="slide2">FOR STUDENTS</p>
                        <button class="button3">Enter access code</button>
                    </div>
                    <div class="grid_section3">
                        <h4 class="cloud_system">
                            <span class="cloud_color">Everything you can do in a physical classroom,</span> you can do with Skilline
                        </h4>
                        <p class="cloud_title">
                            Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
                        </p>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="more">Learn more</a>
                        <img class="ellips1" src={imgList.Ellipse1} alt="" />
                        <img class="ellips2" src={imgList.Ellipse} alt="" />
                    </div>
                    <div class="grid_section4">
                        <img src={imgList.Confident} alt="" />
                        <div>
                            <img class="video" src={imgList.Video} alt="" />
                        </div>
                        <div>
                            <img class="square1" src={imgList.Square2} alt="" />
                        </div>
                        <div>
                            <img class="square2" src={imgList.Square1} alt="" />
                        </div>
                    </div>
                </div>
                
                <Paginator/>
            </section>
        </>
    )
}

export default Main;