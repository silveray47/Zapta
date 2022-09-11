import React from 'react'

const  DesingBiv = ({tags, title, children}) => {

    const containerStyle ={
        backgroundColor: "#0F3460",
        border: "3px solid #567281",
        borderRadius: "10px",
        width: "90vw",
        marginLeft: '5vw',
        marginTop: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }
    

    const titleStyle = {
        color:'white', 
        fontSize:'4rem',
        textAlign:'left',
        paddingTop: '30px',
        paddingLeft: '30px',
        borderRadius: '10px 10px 0 0',
        backgroundColor:'#16213E'
    }
    
    const innerStyle = {
        width:"90%", 
        margin:"40px 5% 2% 5%"
    }
    return (
    <div className='DesingBiv' style={containerStyle}>
        {title&&
        <div className='title' style={titleStyle}>{title}</div>
        }

        <div className='innerDiv' style={innerStyle}>
            {children}
        </div>
    </div>
    )
}

export default DesingBiv
