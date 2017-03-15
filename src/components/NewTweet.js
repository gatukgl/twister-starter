import React from 'react'

const NewTweet = () => (
    <div className='new-tweet'>
       <div className='form-horizontal'>
         <div className='form-group'>
           <div className='tweet-text col-sm-10'>
             <input
               type='text'
               id='tweetText'
               className='form-control'
               placeholder='What is on your mind'
             />
             <div className='col-sm-2'>
               <input type='submit' className='btn btn-default' value='Tweet Now!!!' />
             </div>
           </div>
         </div>
       </div>
    </div>
)

export default NewTweet
