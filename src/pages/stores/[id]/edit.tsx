import { useRouter } from "next/router";

const StoreEdit = () =>{
    const router = useRouter();
    const { id } = router.query
return(
    <div>
        <h1>Store Edit : {id}</h1>
    </div>
)
}

export default StoreEdit;