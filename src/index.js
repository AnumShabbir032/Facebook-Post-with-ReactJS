import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import  imagepost from "./images/post1.png";




// const Card = ({ title, body, imageUrl }) => (
//   <div className='card'>
//     <h2>
//       {title}
//     </h2>
//     <p>
//       {body}
//     </p>
//     <img width={300} src={imageUrl} alt="" />
//   </div>
// )

// const DisplayCard = () => (
//   <>
//     <Card
//       title="Anum Shabbir"
//       body="Web-Develoer"
//       imageUrl="https://avatars.githubusercontent.com/u/68158837?v=4"
//     />

//   </>
// )

const Post = ({ facebookicon, heading, date, textpost, imagepost, likeemoji, heratemoji,
  countShare, like, comment, share, committext, older, usericon, username,commenttext }) => (
  <div className='wrapper'> 
  <div className='post'>
    <div className='user-post'>
      <img src={facebookicon} alt='' width={60} height={60} />
      <div className='userposttext'>
        <h4>{heading}</h4>
        <span>{date}</span>
      </div>


    </div>
    <div className='text-post'>
      {textpost}
    </div>
    <div className='image-post'>
      <img src={imagepost} alt='' height={600} width={615} />
    </div>
    <div className='userlike-post'>
      <div className='emoji'>
        <img src={likeemoji} alt='' width={30} />
        <img src={heratemoji} alt='' width={30} />
      </div>
      <div className='share'>
        <span > {countShare}</span>
      </div>
    </div>
    <div className='likecommentshare-post'>
      <button> <img src={like} width={20} alt='' /> Like</button>
      <button> <img src={comment} width={20} alt='' />  Comment</button>
      <button><img src={share} width={20} alt='' />Share</button>

    </div>
    <div className='commit-post'>
      <div className='commit-text'>
        <p>{committext}</p>
        <span>{older}</span>
      </div>
      <div className='commit-user'>
        <img src={usericon} alt="" />
        <h4>{username}</h4>
      </div>
      <p>{commenttext}</p>
    </div>

  </div>
  </div>
)

const FacebookPost = () => (
  <div>
    <Post

      facebookicon="https://img.icons8.com/color/48/000000/facebook-new.png"
      heading="Facebook"
      date='July 16'
      textpost="“As a Latino in the gaming world, the challenges that we faced every day were obvious. We created the organization to support each other, but quickly realized it could help make the industry a more inclusive and accessible place for everyone else.”
FTW. Fernando R. is a proud Mexican driving representation in the gaming world. Through his facebook group, he’s helped build a community that offers support, access to scholarships and resources for Latin game developers everywhere. ❤️ 🕹 #PaMiGente #MoreTogether 
🎨: Niege Borges 🇧🇷"
      imagepost='https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/279965926_10161400496966729_3439586447701510754_n.png?stp=dst-png_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=5ivfqKmFSroAX_xH9US&_nc_ht=scontent.fkhi8-1.fna&oh=00_AT-gtAl5S2hMiVp9QTSLYQ9t5a-0WlfP1KA0ZUtfeN39DA&oe=631F3313'
      likeemoji='https://img.icons8.com/ios/50/000000/facebook-like--v1.png'
      heratemoji='https://img.icons8.com/emoji/48/000000/heart-decoration.png'
      countShare='5share'
      like='https://img.icons8.com/material-outlined/24/000000/facebook-like--v1.png'
      comment='https://img.icons8.com/ios/50/000000/comments.png'
      share='https://img.icons8.com/small/16/000000/share.png'
      committext='View previous comments'
      older="Oldest"
      username="CK Kanita"
      usericon='https://img.icons8.com/fluency/48/000000/user-male-circle.png'
      commenttext='Great! '
    />
<Post

facebookicon="https://img.icons8.com/color/48/000000/facebook-new.png"
heading="Facebook"
date='July 16'
textpost="Today is Teacher Appreciation Day, and as we’ve seen during this past year, teachers lift us up in ways that far surpass their curriculums. Like the members of the Music Teachers Facebook Group, teachers have found creative ways to keep us connected. Make sure to say thank you to a teacher (or a parent-teacher) today! #MoreTogether"
imagepost='https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/181431311_10160685700461729_6631026936959694562_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=4m-xQynogBkAX_L4Wlj&_nc_ht=scontent.fkhi8-1.fna&oh=00_AT8oFPRwTZxxAxcx1GOhp3U88BiNBICZC9nEGzkFkSs0wg&oe=634090B9'
likeemoji='https://img.icons8.com/ios/50/000000/facebook-like--v1.png'
heratemoji='https://img.icons8.com/emoji/48/000000/heart-decoration.png'
countShare='5share'
like='https://img.icons8.com/material-outlined/24/000000/facebook-like--v1.png'
comment='https://img.icons8.com/ios/50/000000/comments.png'
share='https://img.icons8.com/small/16/000000/share.png'
committext='View previous comments'
older="Oldest"
username="CK Kanita"
usericon='https://img.icons8.com/fluency/48/000000/user-male-circle.png'
commenttext='Great! '
/>
<Post

facebookicon="https://img.icons8.com/color/48/000000/facebook-new.png"
heading="Facebook"
date='July 16'
textpost="Its #EarthDay, which means we're putting a spotlight on Facebook Groups like Repurpose + Upcycling = Inspiration, Bicycle Commuter and VeganSoulSistuhs who all have tips to share on small ways we can all help restore our planet. #MoreTogether"
imagepost='https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/177487792_10160657184431729_1335558799546645948_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=hpz5x_3VnAIAX_310-I&_nc_ht=scontent.fkhi8-1.fna&oh=00_AT9vHkUBk3Grp3nP_eyc01OrW1guBIWBS2si143LQ6DEkg&oe=633ED8AD'
likeemoji='https://img.icons8.com/ios/50/000000/facebook-like--v1.png'
heratemoji='https://img.icons8.com/emoji/48/000000/heart-decoration.png'
countShare='5share'
like='https://img.icons8.com/material-outlined/24/000000/facebook-like--v1.png'
comment='https://img.icons8.com/ios/50/000000/comments.png'
share='https://img.icons8.com/small/16/000000/share.png'
username="CK Kanita"
committext='View previous comments'
older="Oldest"
usericon='https://img.icons8.com/fluency/48/000000/user-male-circle.png'
commenttext=' '
/>

  </div>
)


ReactDOM.render(<FacebookPost />, document.querySelector('#root'));