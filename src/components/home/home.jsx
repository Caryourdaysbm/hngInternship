import React from 'react'
// import Link from '../static/link'
import './home-button.css'
import image from "./Oluwakayode2.png"
import i4g from "./I4G.png"
import github from "./github Icon.png" 
import zuri from "./Zuri.Internship_Logo.png"
import slack from "./slack.png"

export default function Home() {
  return (
    <div>
      <div className='profile-pics'><img src={image} alt="profile image" className='profile__img' id='profile__img' /></div>
      <h3 className="link-button">Oluwakayode Adeyemi</h3>
      {/*<div>
       {Link.map((btnlinkA)=> (
  <div className='link-btn-left'><button className='btns'>{btnlinkA.item}</button></div>
)).slice(0,1)}

{Link.map((btnlink)=> (
  <div className='link-btn'><button className='btns'>{btnlink.item}</button></div>
)).slice(1,6)}
</div> */}
<div className='link-btn'>
  <a href='www.twitter.com/caryourdaysbm' id='twitter'><button className='btns'>Twitter Link</button></a>
</div>
<div className='link-btn hidden'>
  <a href='www.twitter.com/caryourdaysbm'><button className='btns' id='slack'>Slack Name</button></a>
</div>
<div className='link-btn'><a href='https://training.zur.team' id='btn__zuri'><button className='btns'>Zuri Team</button></a></div>
<div className='link-btn'><a href='https://books.zuri.team' id='books'><button className='btns'>Zuri Books</button></a></div>
<div className='link-btn'><a href='https://books.zuri.team/python-for-beginners?ref_id=<>'  id='book__python'><button className='btns'>Python Books</button></a></div>
<div className='link-btn'><a href='https://books.zuri.team/design-rules' id='pitch'><button className='btns'>Background Check for Coders</button></a></div>
<div className='link-btn'><a href='https://books.zuri.team/design-rules'  id='book__design'><button className='btns'>Design Books</button></a></div>

<div className='socialWrap'>
<div className="slack"><img src={slack} alt="slack" className="slack" /></div>
<div className="github"><div className="github"><img src={github} alt="github" className="github" /></div>

</div>
</div>
<footer>
      <div className='flexWrap'>
        <div className="zuriImg"><img src={zuri} alt="Zuri Internship" /></div>
       <p className='zuriText'>HNG Internship 9 Frontend Task</p>
        <div className="i4g"><img src={i4g} alt="Ingressive for Good" /></div>
      </div>
      </footer>
    
   
      </div>
  )
}
