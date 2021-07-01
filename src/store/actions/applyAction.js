export const ADD_TO_APPLY = "ADD_TO_APPLY"
export const CLOSE_APPLY = "CLOSE_APPLY"
export const CONFIRM_APPLY = "CONFIRM_APPLY"

export function addToApply(jobPosting){
    return{
        type: ADD_TO_APPLY,// aksiyonumuza bir isim veriyoruz
        payload: jobPosting // state'i etkileyecek olan veri -- fonksion parametresi
    }
}

export function closeApply(jobPosting){
    return{
        type: CLOSE_APPLY,// aksiyonumuza bir isim veriyoruz
        payload: jobPosting // state'i etkileyecek olan veri -- fonksion parametresi
    }
}

export function confirmApply(jobPosting){
    return{
        type: CONFIRM_APPLY,// aksiyonumuza bir isim veriyoruz
        payload: jobPosting // state'i etkileyecek olan veri -- fonksion parametresi
    }
}