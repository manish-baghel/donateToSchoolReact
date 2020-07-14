import React, {useState, useCallback} from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import Background from "../../public/bg.jpg";
import Footer from "./Footer";
import Preloader from "./Preloader";
import {reqActions} from "../actions";

const ImageGallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <>
      <Gallery photos={props.images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.images.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

const RequirementSection = (props) => {
  const {id, reqs, token} = props;
  if(!id) return ( <></> );
  console.log("props=====",props)
  const creq = reqs.find((e) => e._id == id);
  const images = creq.imgs.map((e) => {
    return {
      src: e.url,
      name: e.tag,
      height: 1,
      width: 1,
    };
  });

  return (
    <div className="container z-10 rounded-lg relative bg-white mx-auto mt-20 p-6 max-w-4xl shadow-2xl mb-20">
      <div className="grid grid-rows-10 gap-2">
        <div className="row-span-1">
          <h2 className="font-bold tracking-tight p-2 text-2xl text-gray-900 sm:leading-3 md:text-3xl">
            {creq.type.title.toUpperCase()}
          </h2>
          <h3 className="font-bold text-base text-indigo-500 px-2 ">{creq.school.name}</h3>
          <h2 className="font-medium p-2 text-gray-500 text-xl">
            Required Quantity: <span className="text-indigo-500">{creq.quantity}</span>
          </h2>
        </div>
        <div className="py-2 row-span-4">
          <p className="p-2 text-gray-500 max-w-xl text-md">{creq.description}</p>
        </div>
        <div className="py-2 row-span-4">
          <ImageGallery images={images} />
        </div>
        <div className="py-2 row-span-2">
          <div className="grid grid-cols-4">
            <button onClick={() => props.commitReq(id,token)} className="group relative col-start-4 py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Commit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    id: state.router.location.query.id,
    reqs: state.requirements.allReqs,
    token: state.authentication.user.token
  };
}

const actionCreators = {
  commitReq: reqActions.commitReq
};

const Requirement = connect(mapStateToProps, actionCreators)(RequirementSection);

const RequirementPage = (props) => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-bottom"
      style={{backgroundImage: `url(${Background})`, backdropFilter: blur(0.8)}}>
      <Navbar shadow={true} />
      <Preloader type="requirements" />
      {props.reqs && <Requirement />}
      <Footer />
    </div>
  );
};
export default connect(mapStateToProps,null)(RequirementPage);
