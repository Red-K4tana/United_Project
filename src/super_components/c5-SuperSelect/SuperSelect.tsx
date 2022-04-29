import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
    valueSelect: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, valueSelect,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions = options ? options.map((option, index) => {

        return (
            <option key={index}>{options[index]}</option>
        )
    }) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value)
        /*onChange && onChange(e)*/
    }

    return (
        <select className={s.SuperSelect} value={valueSelect} onChange={onChangeCallback} style={{width: '100px', margin: '20px'}} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
