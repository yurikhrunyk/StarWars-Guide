import { setupServer } from 'msw/node'
import { handlers } from './hadlers'

export const server = setupServer(...handlers)
