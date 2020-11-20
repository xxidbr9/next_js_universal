import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { fetchPost, deletePosts } from "store/action/postAction";
function Post(props) {
    //Object .posts berasal dari penamaan di index reducer

    const { posts } = useSelector(state => {
        console.log("ini dalam use Select", state);
        return state.posts;
    }, shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost());
    }, [dispatch]);

    const setData = async () => {
        dispatch(fetchPost());
    };

    return (
        <div>
            <button onClick={() => dispatch(deletePosts())}>Hapus</button>
            <button onClick={setData}>Ambil</button>

            <div>
                {!!posts && posts.map(e => <div key={e.id}>{e.title}</div>)}
            </div>
        </div>
    );
}

Post.propTypes = {
    //contoh2 propTypes oakwowkowk
    // tai:propTypes.num.isRequired
};

export default Post;
