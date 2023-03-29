export const Search = ({ type, placeholder, className, onChange }) => {

    return(
        <input type={type} placeholder={placeholder} className={className} onChange={onChange}>
        </input>
    )
}