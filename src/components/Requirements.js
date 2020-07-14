import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import Preloader from "./Preloader";
import Footer from "./Footer";

const Requirement = (props) => {
  const {req} = props;
  return (
    <a href={`/req?id=${req._id}`}>
    <div className="py-8 px-4 mb-4 flex shadow-xl border-b-2 border-gray-300 bg-gray-50 flex-wrap md:flex-no-wrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="tracking-widest font-medium title-font text-gray-900">
          {req.type.title.toLocaleUpperCase()}
        </span>
        <span className="mt-1 text-gray-500 text-sm">{new Date(req.createdAt).toDateString()}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{req.school.name}</h2>
        <p className="leading-relaxed">{req.description.substring(0,50)}...</p>
        <span className="text-indigo-500 inline-flex items-center mt-4">
          {req.status}
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  </a>
  );
};

const comparator = (a,b) => {
  let a_time = new Date(a.createdAt).getTime();
  let b_time = new Date(b.createdAt).getTime();
  return a_time<b_time?1:-1;
}

const RequirementList = (props) => {
  const {allReqs} = props;
  return (
    <>
      {allReqs && allReqs.filter(e => e.status=="active" && e.category==props.category).sort(comparator).map((req, idx) => {
        return <Requirement key={idx} req={req} />;
      })}
    </>
  );
};

const RequirementsComponent = (props) => {
  const {allReqs} = props;
  return (
    <>
      <Preloader type="requirements"/>
      <Navbar shadow={true}/>
      <div className="container min-h-screen px-5 py-24 mx-auto">
        <div className="-my-8">
          <h2 className="text-gray-700 text-2xl font-semibold md:text-4xl mb-2">{props.category=='requirement'?"Requirements":"Volunteering Positions"}</h2>
          <RequirementList allReqs={allReqs} category={props.category}/>
        </div>
      </div>
      <Footer/>
    </>
  );
};
function mapStateToProps(state) {
  return {
    allReqs: state.requirements.allReqs,
  };
}
const Requirements = connect(mapStateToProps, null)(RequirementsComponent);

export default Requirements;
