import React from 'react'
import { NavigatorIOS, View } from 'react-native'

import SpendingList from './SpendingList'
import AddSpendingForm from '../AddSpendingForm'

import GlobalStyle, { Colors } from '../styles'

const SpendingListRoot = React.createClass({
  onRightButtonPress() {
    this.refs.nav.push({
      component: AddSpendingForm,
      title: 'Add new item'
    })
  },
  render() {
    return (
      <NavigatorIOS
        ref="nav"
        initialRoute={{
          component: SpendingList,
          title: 'Last Spendings',
          rightButtonTitle: 'Add',
          onRightButtonPress: this.onRightButtonPress
        }}
        style={GlobalStyle.navBar}
        barTintColor={Colors.p500}
        tintColor={Colors.a100}
        titleTextColor={Colors.white}
      />
    )
  }
})

export default SpendingListRoot
