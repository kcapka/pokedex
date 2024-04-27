

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
        <div className="flex gap-5 mb-10 text-white text-3xl">
            <p onClick={handlePrevious}>Previous</p>
            {pages.map((page, i) => (
                <p key={i} className="cursor-pointer" onClick={() => handlePageSelect(i)}>{page}</p>
            ))}
            <p onClick={handleNext}>Next</p>
        </div>
    )
}