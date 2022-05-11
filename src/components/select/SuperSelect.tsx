import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    arr?: any[]
    setValue?: (arr1: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        arr,
        onChange, setValue,
        ...restProps
    }
) => {
    const mappedOptions: any[] = arr ? arr.map((t, n) => (
        <option key={t + '-' + n} value={t}> {t} </option> )) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        setValue && setValue(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps} >
            <option value=""></option>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
