import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Card = styled.div`
padding: 16px;
border-radius:12px;
background: #f1f5f9;`

const title = css`
font-weight: 700;
color: #4f46e5;`


export default function EmotionStylePage() {
    return (
        <Card>
            <h2 css={title}>Hi Everyone!</h2>
        </Card>
    )
}
