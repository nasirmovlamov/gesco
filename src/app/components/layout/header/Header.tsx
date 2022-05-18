import { useDispatch, useSelector } from 'react-redux'

import { AuthData } from 'app/components/store/reducers/auth/Auth.slice'
import { RootState } from 'app/components/store/store'

export const Header = () => {
    const userData = useSelector(AuthData)
    
    return (
        <>
        {console.log(userData)}
            Header
        </>
    )
}