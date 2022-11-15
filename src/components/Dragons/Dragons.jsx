// React hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions Creators
import { fetchDragons } from "../../redux/dragons/dragonsSlice";
// Components
import DragonItem from "./DragonItem";

const Dragons = () => {
  const dragons = useSelector(state => state.dragons.dragons);
  const dispatch = useDispatch();

  useEffect(()=>   {
    dispatch(fetchDragons())
  }, [])

  return(
    <div className="container" style={{"border": "none"}}>
      <ul className="dragons-list">
        {
          dragons.map((dragon) => (
              <DragonItem 
                key={dragon.id}
                name={dragon.name}
                type={dragon.type}
                description={dragon.description}
                img={dragon.flickr_images}
              />
            ))
        }
      </ul>
    </div>
  )
}

export default Dragons;