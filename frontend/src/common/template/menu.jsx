import React from 'react'
import MenuItem from   './menuitem'
import MenuTree from   './menuTree'

export default props => (
    <li className='sidebar-menu'>
        <MenuItem path="#" label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Ciclos de pagamentos' icon='usd' />
        </MenuTree>
    </li>
)