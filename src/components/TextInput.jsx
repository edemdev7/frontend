function TextInput({ name, onChange, placeholder }) {
    return (
        <div>
            <input
                className="pl-3 border border-black w-96 h-10 rounded-md text-black placeholder:text-black"
                type="text"
                name={name}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}
export default TextInput;
