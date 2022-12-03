import {STEP1, STEP2, STEP3, STEP4} from ".././type"

export const step1Action = (data) =>{
    return {
        type: STEP1,
        payload: data
    }
}
export const step2Action = (data) =>{
    return {
        type: STEP2,
        payload: data
    }
}
export const step3Action = (data) =>{
    return {
        type: STEP3,
        payload: data
    }
}
export const step4Action = (data) =>{
    return {
        type: STEP4,
        payload: data
    }
}