import React, {useState} from "react";
import Transition from "./Transition";
import Mainlogo from "../../public/logo.svg";
import {connect} from "react-redux";
import {userActions} from "../actions/userActions";

const Navlink = (props) => {
  let color = /Login|Signup/.test(props.title) ? "text-indigo-600" : "text-gray-700";
  let colorFocus =  /Login|Signup/.test(props.title) ? "text-indigo-900" : "text-gray-900";
  return (
    <a
      href={props.link}
      className={`mt-1 mr-3 block px-3 py-2 rounded-md text-base font-medium ${color}
      hover:${colorFocus} hover:bg-gray-50 focus:outline-none focus:${colorFocus}
      focus:bg-gray-50 transition duration-150 ease-in-out`}>
      {props.title}
    </a>
  );
};

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {logout} = props;
  return (
    <>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <img className="h-12 w-auto sm:h-16" src={Mainlogo} alt="" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md
                  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none
                  focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  onClick={() => setIsOpen(!isOpen)}>
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:ml-10 md:pr-4">
            <Navlink link="/Donate" title="Donate" />
            <Navlink link="/Volunteer" title="Volunteer" />
            <Navlink link="/FindSchool" title="Schools" />
            {props.user ? (
              <>
                <Navlink link="/profile" title="Profile" />
                <button
                  onClick={() => logout()}
                  className="mt-1 mr-3 block px-3 py-2 rounded-md text-base font-medium
                      text-indigo-600 hover:text-indigo-900 hover:bg-gray-50 focus:outline-none
                      focus:text-indigo-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Navlink link="/login" title="Login" />
                <Navlink link="/signup" title="Signup" />
              </>
            )}
          </div>
        </nav>
      </div>
      <Transition
        show={isOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md">
            <div className="rounded-lg bg-white shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-12 w-auto" src={Mainlogo} alt="" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md
                    text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none
                    focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    onClick={() => setIsOpen(!isOpen)}>
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <Navlink link="/Donate" title="Donate" />
                <Navlink link="/Volunteer" title="Volunteer" />
                <Navlink link="/FindSchool" title="Schools" />
                {props.user ? (
                  <>
                    <Navlink link="/profile" title="Profile" />
                    <button
                      onClick={() => logout()}
                      className="mt-1 mr-3 block px-3 py-2 rounded-md text-base font-medium
                      text-indigo-600 hover:text-indigo-900 hover:bg-gray-50 focus:outline-none
                      focus:text-indigo-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Navlink link="/login" title="Login" />
                    <Navlink link="/signup" title="Signup" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: state.authentication.user,
  };
}
const actionCreators = {
  logout: userActions.logout,
};
const Navbar = connect(mapStateToProps, actionCreators)(NavbarComponent);
export default Navbar;
