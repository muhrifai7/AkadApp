export interface Account {
    user?: string
    message?: string
    timestamp?: number
    data?: []
}

export interface AccountState {
    account: Account[]
}

export const POST_LOGIN = 'POST_LOGIN'

interface PostAccountAction {
    type: typeof POST_LOGIN
    payload: Account
}

export type AccountActionTypes = PostAccountAction