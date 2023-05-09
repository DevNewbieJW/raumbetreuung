import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }]
}

const Index = () => <div>Foo bar</div>

export default Index
