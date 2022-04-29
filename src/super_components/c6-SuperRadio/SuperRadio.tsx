import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import i from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
    value: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: String) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e)
        console.log(e)
        /*onChange && onChange(e)*/
    }


    const mappedOptions = options ? options.map((option, index) => {
        return (
        <label key={name + '-' + index} className={i.labelInputRadio}>
            <input
                className={i.inputRadio}
                type={'radio'}
                name={name}
                checked={value === option}
                value={value}
                onChange={()=>onChangeCallback(option)}
                // name, checked, value, onChange
            />
            <span className={i.spanClassName}>{option}</span>
        </label>
        )}) : []

    return (
        <div style={{margin: '10px'}}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
