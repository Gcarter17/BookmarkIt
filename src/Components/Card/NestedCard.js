import React from 'react'

const NestedCard = ({data}) => {
    
    let style = `https://besticon-demo.herokuapp.com/icon?url=${data.url}&size=100`
    let text = data.name ? data.name : data.url.includes('https://www.') ? data.url.split('https://www.').pop().split('.')[0] : data.url.includes('www.') ? data.url.split('www.').pop().split('.')[0] : data.url.includes('https://') ? data.url.split('https://').pop().split('.')[0] : data.url
    let shrinkText = text.includes(" ")? {fontSize: '24px'} : null

    return (
        <div id={`Card${data.id}`} className='card dib inactive'>
            
            <div className='card-face card-front'>
                <p className='card-mini-description'>
                    {data.heading}
                </p>
                <img className='card-Img' height='200px'  src={style} alt='robots'></img>
                
                    <h2 style={shrinkText} className='card-name prettyText capitalize'>
                        {
                            data.name ? data.name : data.url.includes('https://www.') ? data.url.split('https://www.').pop().split('.')[0] : data.url.includes('www.') ? data.url.split('www.').pop().split('.')[0] : data.url.includes('https://') ? data.url.split('https://').pop().split('.')[0] : data.url
                        }
                    </h2>
                
            </div>
            <div className="card-face card-back"
                style={{
                    background: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url("${style}")`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                    // filter: 'brightness(45%)'
                    }} 
            >
                <p className="card-description">
                {data.description}
                </p>
                <a href={data.url} target="_blank">
                    <h3 style={shrinkText}className='prettyText card-name capitalize'>
                        {text}
                    </h3>
                </a>
            </div>
        </div>
    )
}

export default NestedCard