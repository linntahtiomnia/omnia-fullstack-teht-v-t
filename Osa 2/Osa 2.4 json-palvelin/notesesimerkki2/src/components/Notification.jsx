import styled from 'styled-components'


const Notification = ({ message }) => {
    // Tämä komponentti ei renderöi mitään, jos message on null.
    if (message === null) {
        return null
    }

    return <ErrorNotification>{message}</ErrorNotification>
}

// Styled-components-kirjaston avulla luodaan tyylitelty komponentti, 
// joka on periaatteessa vain div-elementti
const ErrorNotification = styled.div`
    color: red;
    background: lightgrey;
    font-size: 20px;
    border-style: solid;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`





export default Notification