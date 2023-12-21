import { createContext } from "react";
import UserAPI from "../API/UserAPI";

// Init Context
export const DataContext = createContext();

function DataProvider(props){
    const data = {
        userApi : UserAPI(),
        // postApi: usePostapi(),
        // commentApi: useCommentApi()
    }

    return(
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;