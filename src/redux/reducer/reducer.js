import {STEP1, STEP2, STEP3, STEP4} from ".././type"

const initialState = {
    step1 : []
}

const step1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case STEP1:
            return action.payload
        default:
            return state

    }
}
const initialState2 = {
    step2 : []
}

const step2Reducer = (state = initialState2, action) => {
    switch (action.type) {
        case STEP2:
            return action.payload
        default:
            return state

    }
}
const initialState3 = {
    step3 : []
}

const step3Reducer = (state = initialState3, action) => {
    switch (action.type) {
        case STEP3:
            return action.payload
        default:
            return state

    }
}
const initialState4 = {
    step3 : []
}

const step4Reducer = (state = initialState4, action) => {
    switch (action.type) {
        case STEP4:
            return action.payload
        default:
            return state

    }
}

export {step1Reducer, step2Reducer, step3Reducer, step4Reducer}