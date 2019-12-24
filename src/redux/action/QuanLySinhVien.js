import { HANDLE_TOGGLE, ADD_SV, EDIT_SV, SAVE_EDIT, DELETE_SV, GET_LOCALSTORE } from "../constants/QuanLySinhVien";

export const handleToggle = () =>({
    type: HANDLE_TOGGLE,
})

export const addSVAction = (sv) => ({
    type: ADD_SV,
    data: sv
})

export const editSVAction = (sv) => ({
    type: EDIT_SV,
    data: sv
})

export const saveEditAction = (sv) => ({
    type: SAVE_EDIT,
    data:sv
})

export const deleteSVAction = sv =>({
    type:DELETE_SV,
    data:sv
})

export const getLocalStore = (storingData) => ({
    type:GET_LOCALSTORE,
    data: storingData
})