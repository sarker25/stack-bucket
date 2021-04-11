import { Redirect, Router } from '@reach/router';
import NotFound from '../pages/404/index.jsx';
//import custom component
import BucketPage from '../pages/bucket';
import BucketDetailPage from '../pages/bucket-detail';

function AppRouter(){
    return(
        <Router>
            <BucketPage path='/'/>
            <Redirect  from='buckets' to='/' noThrow/>
            <BucketDetailPage path='/buckets/:bucketID' />
            <NotFound  default />
        </Router>
    )
}
export default AppRouter;