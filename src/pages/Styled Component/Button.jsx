import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
padding: 8px 16px;
border: 0;
border-radius: 8px;
color: #fff;
background-color: ${(p) => p.$primary ? 'blue' : 'gray'};
&:hover {
    background-color: ${(p) => p.$primary ? 'darkblue' : 'darkgray'};
}
`


export default function Button() {
    return (
        <StyledButton $primary>Kirim Pesan</StyledButton>
    )
}
