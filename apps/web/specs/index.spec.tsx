import Page from '../app/page'

// //MOCK USERS FETCH
// import { gql } from '../data-access/graphql-client'
// gql.GetUsers = jest.fn().mockResolvedValue({ users: [] })

/**
 * @param {function} Component
 * @param {*} props
 * @returns {Promise<()=>JSX.Element>}
 */
async function resolvedComponent({ Component, props = {} }) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}

describe('Page component test', () => {
  it('should render successfully the async Page component', async () => {
    const PageResolved = await resolvedComponent({ Component: Page })
    expect(PageResolved).toBeTruthy()
  })
})
