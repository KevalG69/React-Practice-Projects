const Pagination = ({ changePage,totalComments, itemsPerPage }) => {
    
    const pages = [];

    //looping to get total pages
    for (let i = 1; i <= totalComments / itemsPerPage; i++) { // 30/10 = 3
        pages.push(i); //[1,2,3]

    }

    return <>
        <div>
            <ul>
                {
                    pages.length>0 && pages.map((page)=>{
                        return(
                            <li>
                                {/* call on change funciton on page select */}
                                <a onClick={()=>changePage(page)} href="!#" >

                                {page}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    
    </>;
};

export default Pagination;
