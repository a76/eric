import React, { PropTypes } from 'react'
import Layout from '../../components/Layout'
import List from '../../components/List'
import s from './styles.css'


const HomePage = (route) => {
  console.log(route)

  return (
    <Layout>
      <List />
    </Layout>
  )
}

export default HomePage
