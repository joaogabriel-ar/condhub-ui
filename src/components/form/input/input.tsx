import './input.scss'

export default function FormInput({text,name, type, placeholder, setValue, value}: any) {

    function handleChange(e:any) {
        setValue(e.target.value);
    }

    function handleOnInvalid(e:any) {
        if(type === "email") {

            e.target.setCustomValidity('Digite um e-mail valido');
        }
    }

    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <input onChange={(e) => handleChange(e)} value={value} type={type} name={name} placeholder={placeholder} onInvalid={(e:any) => handleOnInvalid(e)} required />
        </div>
    )

}

