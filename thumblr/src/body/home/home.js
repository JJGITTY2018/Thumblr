// import React, { Component } from 'react';
// import Slider from './slider';
// // import Login from "../login"


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




import React, { Component } from 'react';
import Slider from "react-animated-slider"
import 'react-animated-slider/build/vertical.css';

import "../../css/slider.css"
import "../../css/slider-animations.css"

const content = [
	{
		title: 'Thumblr',
		description:
		'Thumblr is so easy to use that it’s hard to explain.',
		button: 'Sign Up Now',
		image: 'https://picsum.photos/1920/1080/?random',
		user: 'Luan Lovegood',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Tumblr is blogs.',
		description: "Turns out that when you make it easy to create interesting things, that’s exactly what people do. All those great, random blogs your friends send you, those are Tumblr blogs. We’ll help you find and follow blogs like that, and we’ll help other people find and follow yours.",
		button: 'Explore Your Potential',
    image: 'https://picsum.photos/1920/1080/?random?blur',
		user: 'Harry Black',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'You already know how this works.',
		description:
		'Once you follow a blog, all of its posts show up in your dashboard, just like you’d expect. See something great? Reblog it to your own blog. Add commentary if you like. Make it your own. Other people will do the same to your posts. That’s how you meet people here.',
		button: 'Read More',
		image: 'https://picsum.photos/1920/1080/?random?gravity=north',
		user: 'Snape Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
  },
  	{
      title: 'Okay, it’s not actually hard to explain.',
      description: "We lied. But now you understand this thing. So come on in.",
  	  button: 'See What You Can Do',
  	  image: 'https://picsum.photos/1920/1080/?random?gravity=east',
  	  user: 'Rubus Hagrid',
  	  userProfile: 'https://i.imgur.com/4KeK1tH.png'
  	}
]

class Home extends Component {


  render(){
    return(
      <>
<div className = "wrapper">
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
	</div>
      </>
    )
    
    }
}

export default Home