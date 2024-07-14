import './input.scss'

export default function FormInput({text,name, type, placeholder, setValue, value}: any) {

    function handleChange(e:any) {
        setValue(e.target.value);
    }

    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <input onChange={(e) => handleChange(e)} value={value} type={type} name={name} placeholder={placeholder} required />
        </div>
    )

}

