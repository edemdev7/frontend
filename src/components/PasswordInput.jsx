function PasswordInput({ name, onChange, placeholder }) {
    return (
        <div>
            <input
                className="pl-3 border border-black text-black w-96 h-10 rounded-md placeholder:text-black"
                type="password"
                name={name}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default PasswordInput;
