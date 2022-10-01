import type { ApiContext, User } from 'types'

// eslint-disable-next-line import/no-unresolved
import { fetcher } from 'utils'

export type GetUserParams = {
    // ユーザーID
    id: number
}

/**
 * ユーザーAPI（個別取得）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */

const getUser = async (
    context: ApiContext,
    { id }: GetUserParams,
): Promise<User> => {
    /**
     * ユーザーAPI
     * サンプルレスポンス
    {
        "id": "1",
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description"; "Lorem Ipsum is simply ummt text of the printing and typeseting industory"
    }
    */
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
        {
            headers: {
                Accept: 'application/json',
                'Context-Type': 'application/json',
            },
        },
    )
}
