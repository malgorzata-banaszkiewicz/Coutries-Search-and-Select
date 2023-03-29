export const Population = ({ population, className, children }) => {

    return(
        <h3 className={className}>
            {population}
            {children}
        </h3>
    )
}