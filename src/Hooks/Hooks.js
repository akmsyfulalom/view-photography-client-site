import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - View Photography`;

    }, [title])
}
export default useTitle;