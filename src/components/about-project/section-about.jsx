export function SectionAbout({ content, imgSrc, title }){
    return (
        <div className="w-full h-auto md:max-h-60 flex flex-col md:flex-row items-start md:items-center gap-8 dark:bg-purple-2 bg-gray-6 rounded-lg px-[42px] py-8">
            <div className="h-full flex items-start md:items-center justify-start md:justify-center">
                <img src={imgSrc} alt={title} className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="w-full md:w-[75%] flex flex-col text-start">
                <h4 className="font-extrabold pb-2">{title}</h4>
                <p className="grid">
                    {content?.split('.').map((val, index) => (
                        <span key={index} className="text-sm md:text-base">{val.trim() && `${val.trim()}.`}</span>
                    ))}
                </p>
            </div>
        </div>
    )
}
