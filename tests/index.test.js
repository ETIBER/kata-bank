import { hello, MSG } from '../src'

it('return Hello', () => {
  const expected = MSG

  const result = hello()

  expect(result).toBe(expected)
})
