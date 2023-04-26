import React from 'react'
import { render } from '@testing-library/react'
import Page from '../app/page'
import { gql } from '../data-access/graphql-client'

// //MOCK USERS FETCH
gql.GetUsers = jest.fn().mockResolvedValue({ users: [] })

/**
 * @param {function} Component
 * @param {*} props
 * @returns {Promise<()=>JSX.Element>}
 */
async function resolvedComponent({ Component, props = {} }) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}

describe('Index', () => {
  it('should render successfully', async () => {
    const { baseElement } = render((await Page()) as unknown as React.ReactElement)
    expect(baseElement).toBeTruthy()
  })
})
describe('Page component test alternative approach', () => {
  it('should render successfully the async Page component', async () => {
    const PageResolved = await resolvedComponent({ Component: Page })
    expect(PageResolved).toBeTruthy()
  })
})
