function SectionTitle({title, secondTitle}){
    return(
        <div className="section-title d-flex flex-column align-items-center justify-content-center w-100 mb-4">
            <h2 className="position-relative clr-accent">{title}</h2>
            <p className="mb-0 text-center px-2">{secondTitle}</p>
        </div>
    )
}

export default SectionTitle;