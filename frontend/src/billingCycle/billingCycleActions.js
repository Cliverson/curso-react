import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm , initialize} from 'redux-form'
import { shwoTabs , selectTab, showTabs} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits:[{}], debts:[{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type : 'BILLING_LIST_FETCHED',
        payload : request 
    }
}

export function create(values) {
    return submit(values , 'post')
}

export function update(values) {
    return submit(values , 'put')
}

export function remove(values) {
    return submit(values , 'delete')
}


function submit(values, method) {
    const id = values._id ? values._id : ''
    return dispacth => {
        axios[method](`${BASE_URL}/billingCycles/${id}`,values)
        .then(resp =>{
            toastr.success('Sucesso','Operação realizada com sucesso.')
            dispacth(init())
        })
        .catch(e => {
            console.log(e.response)
            e.response.data.forEach(element => {
                toastr.error('Erro',element)
            });
        })
    }
}

export function showUpdate(billingCycle) {
    
    return [
        selectTab('tabUpdate'),
        showTabs('tabUpdate'),
        initialize('billingCycleForm',billingCycle)
    ]

}


export function showDelete(billingCycle) {
    
    return [
        selectTab('tabDelete'),
        showTabs('tabDelete'),
        initialize('billingCycleForm',billingCycle)
    ]

}

export function init() {
    
    return [
        selectTab('tabList'),
        showTabs('tabList','tabCreate'),
        getList(),
        initialize('billingCycleForm',INITIAL_VALUES)
    ]

}