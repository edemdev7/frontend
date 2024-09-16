function SubmitButton({ value, onChange, onClick }) {
    return (
        <div>
            <input
                className="pl-3 border border-black text-black bg-[#CDF463] w-96 h-10 rounded-md font-bold"
                type="submit"
                value={value}
                onChange={onChange}
                onClick={onClick}
            />
        </div>
    )
}

export default SubmitButton;