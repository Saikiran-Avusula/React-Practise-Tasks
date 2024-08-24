import { Puff } from "react-loader-spinner"
const PuffLoader = () => {
    return (
        <Puff
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}

export default PuffLoader