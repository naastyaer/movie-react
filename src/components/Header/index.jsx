import Form from "components/Form"
function Header ({setName}){
    return(
        <header className="h-[250px] bg-bottom bg-[url('https://phonoteka.org/uploads/posts/2022-01/1642994082_66-phonoteka-org-p-kino-fon-dlya-prezentatsii-72.png')] text-white font-semibold flex justify-between text-xl ">
            <div className=" pt-10 flex mx-auto flex-row  w-full justify-between">
                <h1 className="text-3xl ">movie search</h1>
                <Form setName={setName} className="pl-10"/>    
            </div>
           
        </header>
    )
}
export default Header
