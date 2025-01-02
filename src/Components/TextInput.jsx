
export function TextInput({onInput,value,className}){
    return (
        <textarea onInput={onInput} className={className} value={value} />
    )
}