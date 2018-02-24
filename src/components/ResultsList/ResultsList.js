import React from 'react'
import PropTypes from 'prop-types'
import { Text, FlatList } from 'react-native'
import styles from './styles'

export default ResultsList = ({data, renderItem, keyExtractor, ItemSeparatorComponent}) => (
  <FlatList
    style={styles.resultsList}
    data={data}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    ItemSeparatorComponent={ItemSeparatorComponent}
  />
)

ResultsList.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
  ItemSeparatorComponent: PropTypes.func.isRequired
}