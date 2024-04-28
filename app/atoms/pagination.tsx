

export default function Pagination({selectedPage, setSelectedPage}:any) {

    let pages = [];
    for(let i = 1; i < 15; i++) {
      pages.push(i);
    }

    function handlePageSelect(index:number) {
        setSelectedPage(index * 100);
    }

    function handlePrevious() {
        if(selectedPage > 0) {
            setSelectedPage(selectedPage - 100);
        }
    }

    function handleNext() {
        if(selectedPage < 1300 ) {
            setSelectedPage(selectedPage + 100);
        }
    }

    return (
        <div className="flex gap-2 md:gap-5 mt-10 text-white text-lg md:text-3xl" id="pagination">
            <p onClick={handlePrevious} className="cursor-pointer hover:text-pokemon-yellow">Previous</p>
            {pages.map((page, i) => (
                <p key={i} className={`${selectedPage == i * 100 ? "text-pokemon-yellow": ""} cursor-pointer hover:text-pokemon-yellow`} onClick={() => handlePageSelect(i)}>{page}</p>
            ))}
            <p onClick={handleNext} className="cursor-pointer hover:text-pokemon-yellow">Next</p>
        </div>
    )
}