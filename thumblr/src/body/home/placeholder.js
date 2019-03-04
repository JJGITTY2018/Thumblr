// import React, { Component } from 'react';
// import Slider from './slider';
import Login from "../login"


// import Image1 from "../assets/wall1.jpg"
// import Image2 from "../assets/wall2.jpg"
// import Image3 from "../assets/wall3.jpg"
// import Image4 from "../assets/wall4.jpg"

// const images = [Image1, Image2, Image3,Image4]

// export default class Home extends Component {
//   render() {
//     return (
//       <>
//         <div className = "display_container">
//           <div className = "slider" style={{ display: 'flex', justifyContent: 'space-between' }} />
//           {/* <Login></Login> */}
//           <Slider
//             options={{
//               autoPlay: 4000,
//               pauseAutoPlayOnHover: true,
//               wrapAround: false,
//               fullscreen: true,
//               adaptiveHeight: true,
//             }}
//           > 
//             {images.map((image, index) => (
//               <div style={{ width: '100%', height: "100%", margin: '0 0.5em' }} key={index}>
//                 <img src={image} alt="" />
//               </div>
//             ))}
//           </Slider>


//         </div>

//         </>
//     );
//   }




import React, {
  Component
} from 'react';
import Slider from "react-animated-slider"

import "../../css/slider-animations.css"
import "../../css/slider.css"

const content = [{
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
    button: 'Read More',
    image: 'https://i.imgur.com/ZXBtVw7.jpg',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png'
  },
  {
    title: 'This is 2 A',
    description: "This is 2 B",
    button: 'This is 2 C',
    image: 'https://i.imgur.com/DCdBXcq.jpg',
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png'
  },
  {
    title: 'Phasellus volutpat metus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    button: 'Buy now',
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png'
  }
]

class Home extends Component {


  render() {
    return ( <
      >
      <
      div className = "wrapper" >
      <
      Slider className = "slider-wrapper" >
      <
      div > < Login / > < /div> <
      div > < h1 > Hello < /h1> </div >
      <
      /Slider> <
      /div> <
      />
    )
  }
}

export default Home



// {content.map((item, index) => (
// 				<div
// 					key={index}
// 					className="slider-content"
// 					style={{ background: `url('${item.image}') no-repeat center center` }}
// 				>
// 					<div className="inner">
// 						<h1>{item.title}</h1>
// 						<p>{item.description}</p>
// 						<button>{item.button}</button>
// 					</div>
// 					<section>
// 						<img src={item.userProfile} alt={item.user} />
// 						<span>
// 							Posted by <strong>{item.user}</strong>
// 						</span>
// 					</section>
// 				</div>
// 			))}