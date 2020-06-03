import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";

export const LandingSection = (props) => {
  const direction = props.direction === "reverse" ? "flex-row-reverse" : "flex-row";
  const defaultImgUrl =
    "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
  const imgUrl = props.imgUrl ? props.imgUrl : defaultImgUrl;
  return (
    <section className="relative py-20">
      <div className="container mx-auto md:px-2 px-4 lg:px-4">
        <div className={`items-center flex flex-wrap ${direction}`}>
          <div className="w-10/12 md:w-5/12 lg:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." className="max-w-full rounded-lg shadow-lg" src={imgUrl} />
          </div>
          <div className="w-10/12 md:w-5/12 lg:2-5/12 ml-auto mr-auto px-4 pt-6 md:pt-0">
            <div className="md:pr-12">
              <div className="text-indigo-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-indigo-300">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">Small Heading</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Some content about something worth taking three lines, may contain 26 - 30 words
                just enough to make it look relevant and short like this.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Some three ford motivational stuff</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 mr-3">
                        <i className="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Just to keep interest on the beauty</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 mr-3">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">On UI or on the Donation Stuff</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const TeamIndividual = (props) => {
  const imgUrl = props.imgUrl
    ? props.imgUrl
    : "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <img
          alt="..."
          src={imgUrl}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{maxWidth: "120px"}}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">{props.name}</h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">{props.title}</p>
          <div className="mt-6">
            <button
              className="bg-indigo-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button">
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-indigo-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button">
              <i className="fab fa-facebook-f"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const TeamSection = () => {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Administration and Stuff</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Some words about the administration and ofcourse Mota Bhai. With some random numbers
              to impress potential donors.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <TeamIndividual name="Manish Baghel" title="Software Developer" />
          <TeamIndividual name="Durga Shakti Nagpal" title="IAS Officer" />
          <TeamIndividual name="Ravi Kant Singh" title="Software Developer" />
          <TeamIndividual name="Vipul Vaibhav" title="Software Developer" />
        </div>
      </div>
    </section>
  );
};

const Landing = () => {
  return (
    <>
      <Banner />
      <LandingSection />
      <LandingSection direction="reverse" />
      <LandingSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default Landing;
