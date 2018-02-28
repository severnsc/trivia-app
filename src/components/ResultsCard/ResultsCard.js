import React from 'react'
import Card from '../common/Card'
import ResultsList from '../ResultsList'

export default ResultsCard = ({data}) => (
  <Card>
    <Card.Body>
      <ResultsList data={data} />
    </Card.Body>
  </Card>
)