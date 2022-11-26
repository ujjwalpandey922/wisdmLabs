import React from "react";
import "./Home.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsLink } from "react-icons/bs";
import author from "../../assets/author.png";

const Home = () => {
  return (
    <div className="app__home">
      <div className="app__home-content">
        <div className="app__home-content_info">
          <p>
            In order to write, one must read constantly, observe the world well,
            and take seriously the craft of writing. During this five-week
            course, we will focus on the last of these, the craft of
            writing—specifically, we will focus on three mainstays of fiction:
            character, dialogue, and scene.
            <br />
            <br />
            “I think that writers often feel more comfortable writing exposition
            and summary than scene, perhaps because in our own lives we often
            feel more comfortable observing than engaging, and scene is about
            getting our characters to engage,” says instructor Lori Ostlund. “In
            this class we will focus on creating scenes as a way to develop
            characters, demonstrate changes in them, and increase tension.
            <br />
            <br />
            “We will also spend a lot of time on dialogue, thinking about it as
            a way to reveal character and relationships and, perhaps most
            important, as a way to reveal the shifting power dynamics that are
            at work in those relationships and which create tension.”
            <br />
            <br />
            We will look at examples from short stories and novels and engage in
            in-class exercises that focus on these three craft building blocks.
            Participants will use these exercises to create work at home, which
            we will workshop during the last two weeks of class. “My goal,” Lori
            says, “is for us to think about these craft elements in ways that
            are new and generative.”
          </p>
          <div className="app__home-content_info-share">
            <span>Share</span>
            <BsFacebook className="app__home-content_info-share-icons" />
            <AiFillTwitterCircle className="app__home-content_info-share-icons" />
            <TiSocialLinkedinCircular className="app__home-content_info-share-icons" />
            <BsLink className="app__home-content_info-share-icons" />
          </div>
          <hr />
          <div className="app__home-content_info-class">
            <h3>Class Schedule</h3>
            <div className="app__home-content_info-class-time">
              <p>Time:</p>
              <span>10:30am - 4:00pm (PST)</span>
            </div>
            <div className="app__home-content_info-class-Dates">
              <p>Dates:</p>
              <span>
                Tue <br />
                6/15
              </span>
              <span>
                Tue <br />
                6/15
              </span>
              <span>
                Tue <br />
                6/15
              </span>
              <span>
                Tue <br />
                6/15
              </span>
              <span>
                Tue <br />
                6/15
              </span>
            </div>
          </div>
        </div>
        <div className="app__home-content_author">
          <img src={author} alt="author" />
          <p>
            <span>John Doe ,</span>
            MFA, writes fiction and nonfiction with a special emphasis on the
            power of place. Her work has been anthologized and published in
            venues such as Atlas Obscura, The Los Angeles Times, The Sun, and
            Best Women’s Travel Writing. She loves to see her students surprise
            and delight themselves (and others!), whether she’s teaching at City
            University of New York, the San Francisco Women’s Jail, or The
            Writing Salon. After many years of living abroad (from Oaxaca to
            Quito to San Jose, Costa Rica), she now lives in San Francisco. She
            is also the author of Living Abroad in Costa Rica.
          </p>
          <div className="app__home-content_author-btn">
            <button>See John’s Reviews</button>
          </div>
        </div>
      </div>
      <div className="app__home-image">
        <div className="app__home-image-content">
          <h3>“</h3>
          <div className="app__home-image-content-quote">
          <p>
            Erin was a wonderful teacher. She was personable, kind, organized,
            and great with facilitating group discussion.
            <br />
            <span> Katy L. </span>
          </p>
          </div>
             <h3>”</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
