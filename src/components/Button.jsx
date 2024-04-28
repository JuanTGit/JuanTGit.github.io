
function Button(){

    const style = {
        backgroundColor: 'Blue',
        borderRadius: '5px',
        border: 'none',
        color: 'White',
        textDecoration: 'none',
        display: 'inline-block',
        padding: '10px 15px',
        textAlign: 'center',
        
    }
    
    const handleClick = () => {
        console.log('Button clicked')
    }

    return(
        <a onClick={handleClick} style={style} href="https://www.linkedin.com/in/juan-tejeda/">LinkedIn</a>
    );
}

export default Button