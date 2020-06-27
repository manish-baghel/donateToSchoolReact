import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import Preloader from "./Preloader";

const Requirement = (props) => {
  const {req} = props;
  return (
    <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="tracking-widest font-medium title-font text-gray-900">
          {req.type.title}
        </span>
        <span className="mt-1 text-gray-500 text-sm">{new Date(req.createdAt).toDateString()}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{req.school.name}</h2>
        <p className="leading-relaxed">{req.description}</p>
        <a className="text-indigo-500 inline-flex items-center mt-4">
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
        </a>
      </div>
    </div>
  );
};

const RequirementList = (props) => {
  const {allReqs} = props;
  return (
    <>
      {allReqs && allReqs.map((req, idx) => {
        return <Requirement key={idx} req={req} />;
      })}
    </>
  );
};

const RequirementsComponent = (props) => {
  const {allReqs} = props;
  return (
    <>
      <Preloader />
      <Navbar />
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8">
          <RequirementList allReqs={allReqs} />
        </div>
      </div>
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
