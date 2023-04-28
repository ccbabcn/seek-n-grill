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

describe('Pageresolved resolves Pase promise correctly', () => {
  it('should render successfully the async Page component', async () => {
    const PageResolved = await resolvedComponent({ Component: Page })
    expect(PageResolved).toBeTruthy()
  })
})

describe('Index', () => {
  it('Page component should render successfully an htlm element', async () => {
    const { baseElement } = render(await Page())
    expect(baseElement).toBeTruthy()
  })
})
