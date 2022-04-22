import { MenuContainer, MenuWrapper, Icon, Text, IconTextContainer } from "../../../styles/sideBarStyles/cardModalStyles/MenuStyles";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { useRef, useEffect } from "react"
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase"
import { useSelector, useDispatch } from "react-redux";
import { setLastUpdate } from "../../../redux/Slice";

const Menu = ({opendEditModal, closeModal, data}) => {

  const states = useSelector((state) => state.reducer.states);
  const dispatch = useDispatch();

  //Outside click detecting
  const ref = useRef();
  useEffect(()=>{
    const handleClickOutside=(event)=>{
      if (ref.current){
        if (!ref.current.contains(event.target)) {
          closeModal();
        }
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

  //Delete plan data
  const deletePlan = async () => {
    await deleteDoc(doc(db, `users/${states.user.id}/plans/${data.id}`));
    dispatch(setLastUpdate(new Date()));
  }

  return (
    <MenuContainer ref={ref}>
      <MenuWrapper>
        <IconTextContainer onClick={opendEditModal}>
          <Icon><FaRegEdit size={20} /></Icon>
          <Text>Edit</Text>
        </IconTextContainer>
        <IconTextContainer onClick={deletePlan}>
          <Icon><FaRegTrashAlt size={20}/></Icon>
          <Text>Delete</Text>
        </IconTextContainer>
      </MenuWrapper>
    </MenuContainer>
  )
}

export default Menu;