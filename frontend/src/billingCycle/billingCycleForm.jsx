import React, {Component} from 'react'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { reduxForm , Field , formValueSelector} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'

import { init } from './billingCycleActions'


class BillingCycleForm extends Component {
    componentWillMount() {

    }
    
    render() {
        const { handleSubmit ,readOnly , credits, debts} = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        label='nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} readOnly={readOnly}
                        label='month' cols='12 4' placeholder='Informe o Mês' />
                    <Field name='year' component={labelAndInput} readOnly={readOnly}
                        label='year' cols='12 4' placeholder='Informe o Ano' />
                    <ItemList 
                        field='credits' legend='Créditos' cols='12 6' list={credits}  readOnly={readOnly}/>
                    <ItemList 
                        field='debts' legend='Débito' cols='12 6' list={debts}  readOnly={readOnly}
                        showStatus={true}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' 
                        onClick={this.props.init}>Cancelar
                    </button>
                </div>
            </form>
        )
    }

}


BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount:false})(BillingCycleForm)

const selector = formValueSelector('billingCycleForm')

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
const mapStateToProps = state => {
  
   return  ({credits: selector(state,'credits'),
             debts:selector(state,'debts')})
}





export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)