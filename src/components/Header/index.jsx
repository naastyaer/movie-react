import Form from "components/Form"
function Header ({setName}){
    return(
        <header className="md:h-[250px] h-[150px] bg-bottom bg-[url('https://phonoteka.org/uploads/posts/2022-01/1642994082_66-phonoteka-org-p-kino-fon-dlya-prezentatsii-72.png')] text-white font-semibold flex justify-between text-xl ">
            <div className=" justify-start items-center pt-5 md:pt-10 flex mx-auto  flex-col md:flex-row  w-[90%]  md:justify-between">
                <h1 className="text-3xl mb-10 ">movie search</h1>
                <Form setName={setName} className=""/>    
            </div>
           
        </header>
    )
}
export default Header
