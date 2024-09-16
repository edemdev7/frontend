function EmailInput({ name, placeholder, onChange }) {
    return (
        <div>
            <input
                className="pl-3 border border-black text-black w-96 h-10 rounded-md placeholder:text-black"
                type="email"
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default EmailInput;