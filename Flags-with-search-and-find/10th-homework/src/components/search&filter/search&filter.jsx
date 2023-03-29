export const SearchAndFilter = ({ action, method, children, className, style, onChange }) => {
    
    const preventDefault = (event) => {
        event.preventDefault()
    } 

    return(
        <form action={action} method={method} className={className} style={style} onChange={preventDefault}>
            {children}
        </form>
    )
}