import { useRouter } from "next/router";

const StorePage = () =>{
    const router = useRouter();
    const { id } = router.query
return(
    <div>
        <h1>Store Detail : {id}</h1>
    </div>
)
}

export default StorePage;