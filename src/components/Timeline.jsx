import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/timeline.css";

export default function Timeline() {
  return (
    <div className="timeline">
      <h2 className="header">A Timeline of some of our best moments</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="13 October, 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", fontSize: '40px' }}
          icon='🍀'
        >
          <div className="time-content">
            <p>
              Our first date in Nagoya, 
              I could not believe that this beautiful woman let me 
              come see her in her home city.  I felt like the luckiest guy ever.
            </p>
            <div className="img-wrapper">
              <img src="IMG_1171.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="15 November, 2019"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Our first trip to Mt. Fuji where we explored and went camping.
              My animal lover is always trying to see the animals.  I love that
              youre an animal lover.
            </p>
            <div className="img-wrapper">
              <img src="IMG_1268.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="20 November, 2019"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              First time seeing the winter lights together.  
              The brightness of the lights could not stop me from 
              staring at you the whole time.
            </p>
            <div className="img-wrapper">
              <img src="IMG_1317.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="07 December, 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", fontSize: '40px' }}
          icon='🚂'
        >
          <div className="time-content">
            <p>
              Riding the train and going to our relaxing hotel in Kawaguchi-ko.
              You're always ready when I have crazy ideas about stuff to do.
              I'm glad youre spontaneous enough to deal with it.
            </p>
            <div className="img-wrapper">
              <img src="IMG_1379.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="29 December, 2019"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              The day you were at my place and did my make up so I had to mark my territory.
              Also the day I almost had a heart attack when I finally had the courage to ask 
              you to be my girlfriend.  One of the best days of my life.
            </p>
            <div className="img-wrapper">
              <img src="unnamed.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="01 February, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Our first time going snowboarding.  You are so adventurous and willing to try
              new things.  I hope I was able to teach you a little bit and that you still 
              remember how.
            </p>
            <div className="img-wrapper">
              <img src="IMG_1467.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="15 March, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", fontSize: '40px' }}
          icon='🥟'
        >
          <div className="time-content">
            <p>
              Staying at our favorite Air BnB.  One of my favorite memories when
              you taught me how to make gyoza.  My favorite part was throwing the 
              skins on you though.
            </p>
            <div className="img-wrapper">
              <img src="IMG_4608.JPG" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="30 July, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Trying to survive through COVID staying at Air BnBs.  Very tough times but
              I am glad I had the perfect person to get
              through it with.  
            </p>
            <div className="img-wrapper">
              <img src="IMG_0091.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="01 August, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Getting some time in the sun. (ended bad for me)
              I enjoyed laying on the beach the most on top of you.
            </p>
            <div className="img-wrapper">
              <img src="IMG_0113.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="22 August, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Checking out some flowers in the park with the most beautiful
               one right next to me.  
            </p>
            <div className="img-wrapper">
              <img src="IMG_0218.JPG" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="28 August, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", fontSize: '40px' }}
          icon='💋'
        >
          <div className="time-content">
            <p>
              Some of my favorite times were just laying in bed and 
              hanging out.  You make me feel so comfortable as if I am always at home.
            </p>
            <div className="img-wrapper">
              <img src="IMG_0254.JPG" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="14 September, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Our camping trip in Toyouka that brought us to the village with the onsen 
              tamago and foot baths.  I am glad we found the foot bath because you
              have some stinky feet.
            </p>
            <div className="img-wrapper">
              <img src="IMG_0379.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="18 September, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              A date of ours at Seven Days.  One of my favorite spots that we would
              go to.  I was so happy that you would try my beer and eventually get one 
              for yourself too.  That's my girl!
            </p>
            <div className="img-wrapper">
              <img src="IMG_0438.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="15 October, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Our first trip to Osaka together.  We couldn't do much but the time we got
              to spend together is priceless.  Our relaxing night walk there was the best.
            </p>
            <div className="img-wrapper">
              <img src="IMG_0490.jpg" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="07 November, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", fontSize: '40px' }}
          icon='🍲'
        >
          <div className="time-content">
            <p>
              Every chef needs someone to test their food and I got the best one to do it.
              I know not everything was good but you were nice enough to tell me it was and
              I appreciate you.
            </p>
            <div className="img-wrapper">
              <img className='left' src="IMG_0666.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="09 December, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Our visit to Pleasure Forest in Tokyo.  The heart in the picture is the size
              of a molecule compared to how much love I have for you.
            </p>
            <div className="img-wrapper">
              <img src="IMG_0764.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="01 January, 2021"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              The first New Years we got to spend together and my favorite.
              Drinking and dressing up at your place was so much fun.
              I got my New Years kis and got to see my favorite tomato.
            </p>
            <div className="img-wrapper">
              <img src="IMG_0964.JPG" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="22 January, 2021"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              The first time I got to see how sensitive your nose is.  
              Good thing I had a frozen bottle of Jack Daniels right?
            </p>
            <div className="img-wrapper">
              <img src="IMG_1102.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="13 February, 2021"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              My beautiful mermaid in Okinawa during my work trip.  Almost 
              getting in trouble for having you over was so worth it.  
              Would not give up any of that time for the world.
            </p>
            <div className="img-wrapper">
              <img className="right" src="IMG_1188.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="19 March, 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", fontSize: '35px' }}
          icon='🏕️'
        >
          <div className="time-content">
            <p>
              My crabby morning girl trying to survive the cold with me.
              I am glad that you try to be a big eater like me since I 
              always make too much food dont I?
            </p>
            <div className="img-wrapper">
              <img src="unnamed (1).jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="11 June, 2021"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Another one of my favorite spots to hang out with you.  I appreciate
              you so much for going with me and trying different beers with me.  
              I hope you enjoyed it too.
            </p>
            <div className="img-wrapper">
              <img src="unnamed (2).jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="06 July, 2021"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              My morning girl again and I at our favorite breakfast place.
              I can't wait to go back and eat there every day that I am 
              staying at your place.
            </p>
            <div className="img-wrapper">
              <img src="unnamed (3).jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="29 August, 2021"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              I love seeing you get ready to go to work but I hate that it means you have
              to leave.  You are the hardest working person that I know and it pushes me to 
              do better every day.  Do you think I forgot anything before 
              I left after this picture?
            </p>
            <div className="img-wrapper">
              <img src="unnamed (4).jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="14 September, 2021"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Fishing at the trout sanctuary where you caught so many fish.
              I think the fish should know not to come to you since you like to
              eat them so much right?
            </p>
            <div className="img-wrapper">
              <img src="IMG_2140.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="31 October, 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", fontSize: '40px'}}
          icon='⚾'
        >
          <div className="time-content">
            <p>
              Our first Halloween together where we got to represent the best team!
              You are the hottest cheerleader in the universe and if I was playing, 
              I wouldnt be able to look at the ball.
            </p>
            <div className="img-wrapper">
              <img src="unnamed (5).jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="29 December, 2021"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Our Anniversary date where we got to dress up and have a fancy meal.
              Your natural elegance fit right in to that place.  I felt so lucky to have
              you there with me.
            </p>
            <div className="img-wrapper">
              <img src="IMG_5666.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="01 January, 2022"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Another crazy night in Tokyo where we got to have another New Years kiss, 
              but this time with the tower in the background.  I was tired and crabby but 
              the love you give me is takes it all away.
            </p>
            <div className="img-wrapper">
              <img src="IMG_2847.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="15 April, 2022"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              We finally found a new place in Nagoya, Caravan.  Trying interesting gins 
              and meeting new people was so fun.  I alwasy end up eating the rest of your 
              food every time.
            </p>
            <div className="img-wrapper">
              <img src="IMG_3279.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="27 April, 2022"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              The most beautiful Hawkeyes fan lives in Japan!  I am glad I have
              the perfect model to help me practice my terrible phot taking skills.
              Luckily you make every picture look like it should be in a museum.
            </p>
            <div className="img-wrapper">
              <img src="DSC_0640.JPG" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="23 July, 2022"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              I was very surprised when you tried smoking a cigar but I loved that
              you did.  Looking like a very sophisticated person/tomato.  
              You are always ready to have fun.
            </p>
            <div className="img-wrapper">
              <img src="IMG_3728.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="14 September, 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", fontSize: '40px'}}
          icon='🐟'
        >
          <div className="time-content">
            <p>
              Our last big trip before I left Japan.  Probably the
              best trip I went on.  Got to see my mermaid in her natural habitat again
              and see her friends under the water.  Cant wait to go on another beach trip again.
            </p>
            <div className="img-wrapper">
              <img className="right" src="IMG_3879.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="26 October, 2022"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Showing off our ice at Trunk and having a beer.  Thinking about these times
              hanging out in Nagoya with you makes me feel so happy.  
              It really feels like home with you.
            </p>
            <div className="img-wrapper">
              <img className="right" src="IMG_0341.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="24 December, 2022"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              One last time together in Tokyo before I left (until next time).  
              Im sorry that I had to embarrass you with my moustache but I think 
              deep down you really like it.
            </p>
            <div className="img-wrapper">
              <img  src="IMG_4257.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="18 January, 2023"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              My pack mule with the huge amount of popcorn that we bought.
              I am so lucky to have someone that cares so much to come across 
              the world to visit.  My family adores you and cant wait to see you again.
              (neither can I).  Having you there with me felt like a dream come true.
            </p>
            <div className="img-wrapper">
              <img  src="IMG_4319.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="23 January, 2023"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          // icon={}
        >
          <div className="time-content">
            <p>
              Our time in Chicago.  Very cold but I hope I kept you warm.  It ended
              with the hardest time of my life saying goodbye to you for awhile.  It 
              makes me sad but I know that we both have been through so much these years
              and this is just a small part.
            </p>
            <div className="img-wrapper">
              <img  src="IMG_4357.jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Now"
          iconStyle={{ background: "rgb(33, 150, 243)", fontSize: '40px'}}
          icon='❤️'
        >
          <div className="time-content">
            <p>
              Lastly, I am giving you my infinity birthday kisses that
              I wish I could give you in person.  Writing these memories reminds me of how lucky I am to have 
              such an amazing, smart, caring, funny, hardworking and loveable person in the Universe.
               I love you more than anything!  Happy Birthday baby.
            </p>
            <div className="img-wrapper">
              <img  src="unnamed (6).jpg" align='right' />
            </div>
          </div>
        </VerticalTimelineElement>
        
        
      </VerticalTimeline>
      
      
    </div>
  );
}
