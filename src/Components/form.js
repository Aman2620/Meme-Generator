import React from 'react'
import './form.css'
import myObject from '../memeData'

function Form() {
  const [meme,setMeme] = React.useState({
    topText : "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages,setMemeImages] = React.useState(myObject)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
      }))
    }

    function addTexttoimg(event){
      const {name,value}=event.target
      setMeme(prevMeme=>({
        ...prevMeme,
        [name]:value
      }))
    }

  return (
    <div>

        <div className="form">
            <input 
            type="text" 
            placeholder='Top Text'
            name="topText"
            value={meme.topText}
            onChange={addTexttoimg}
            />

            <input 
            type="text" 
            placeholder='Bottom Text'
            name="bottomText"
            value={meme.bottomText}
            onChange={addTexttoimg}
            />
        </div>
        <button type='button' onClick={getMemeImage}>Generate a New Image</button>

        <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      
    </div>
  )
}

export default Form
