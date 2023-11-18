
const Input = ({ disabled = false, className, placeholder, ...props}) => {
    return (
        <input disabled={disabled} className={`w-full p-2.5 px-6 border border-secondary focus:outline-secondary rounded-lg ${ className }`} placeholder={placeholder} {...props}/>
    );
};
export default Input;