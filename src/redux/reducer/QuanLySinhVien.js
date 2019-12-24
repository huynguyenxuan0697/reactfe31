import { HANDLE_TOGGLE, ADD_SV, EDIT_SV, SAVE_EDIT, DELETE_SV, GET_LOCALSTORE } from "../constants/QuanLySinhVien"

const initialState = {
    isOpen:false,
    mangSV : [],
    sinhVienEdit : {},

}
const quanLySinhVienReducer = (state= initialState,action)=>{
    switch (action.type){
        case HANDLE_TOGGLE:
            {
                const isOpen = !state.isOpen;
                return {...state,isOpen}    
            }
        case ADD_SV:
            {
                const mangSV = [...state.mangSV];
                mangSV.push(action.data);
                return {...state, mangSV}
            }
        case EDIT_SV:
            {        
                return {...state,sinhVienEdit : action.data}
            }
        case SAVE_EDIT:
            {
                const index = state.mangSV.findIndex(sv => sv.maSV = action.data.maSV);
                const mangSV = [...state.mangSV];
                if(index !== -1){
                    mangSV [index] = action.data;
                    return {...state,mangSV}
                }
            }
        case DELETE_SV:
            {
                const mangSV = [...state.mangSV];
                const index = mangSV.findIndex(sv => sv.maSV === action.data.maSV);
                mangSV.splice(index,1);
                return {...state,mangSV};
            } 
        case GET_LOCALSTORE:
            {
                const mangSV = action.data;
                return {...state,mangSV}
            }
        default:
            return state
    }
}

export default quanLySinhVienReducer