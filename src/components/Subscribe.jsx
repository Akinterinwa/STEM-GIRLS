import React, { useState } from 'react';
import "./Footer.css";

const Subscribe = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://connect.mailerlite.com/api/subscribers",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDlhMWFjMmJlYmVjNjNmOTVkMjQwNmFmZDJjY2E5NGIxYWM3NTkxOTk5ZjY2Y2IyZjU3NTllMTNkMjRlY2FkZGFlYmQ2N2FjYWFjYmFkOWQiLCJpYXQiOjE3MTU3NDA2ODEuNjgwNDcyLCJuYmYiOjE3MTU3NDA2ODEuNjgwNDc0LCJleHAiOjQ4NzE0MTQyODEuNjc2ODE0LCJzdWIiOiI5NTY4MDgiLCJzY29wZXMiOltdfQ.R28K_mYGmXYNfev3Eqqc7Oe7mlpmGUPEGyRJ3-s1VJq_ZQV6GX91uM5-51wzAHBKER_gJRDPZt2Nj17ybDOnQz4T3UFL13glTlEVsK9_mdbyseJv8JKcP4xNSV7GJuO_KwzkhG30dOqppA9K79n_QQ9OB-HyxUHHjtYJuC1s9EAfHy2zOnLhmT5nwwLbV7YRX9amCFU1fspsp1XgXTaAB_PJH-yNPlnL6WmiFjmVf2ztYt2YPAtkA7nwXsG_kWr25A0eyYxzIAXiv6LkL-8x41Tz1aKnEndI_YkhbF0ubryjrE9hnaE8yhdfXJnX-ce8ZpML4xT7rUMqV96cGhwh5C4tEritmfBzZbvh6gqQ7IpEJNuc7gE5UFMd0Cw3WW3IRZsttNzblEMlUn-z0S6ZWeFHI-4j-uWsWn5kcWtOAb8zjg41npN0caKZNAZo8GoI6Ne0D11P-KV5ORqt-22qgnh1mSjBHdQtA2nS_3XtjAp1gcvoYF25yH-YDG_T_UXdbzu2U2W8xPqRRjGeSY_-fku-G--Mpw3UarbVIc34WHHubI1admLdAh0UNxawLKrYCB8XgDZvqh7iPsYBDGeL3ftjTkhIoQ-WXfFZG12fSM3--TXIrcfF3vKBoB5Jox4yJvcMkP68F9jgfK4piJlAW7u2uOVzazSx1L0sr6mEgmM`

                    },
                    body:JSON.stringify({
                        email: email,
                        groups: [ ]
                    })
                }
            )

        } catch (error) {

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                // type="email"
                 value={email} 
                 onChange={(e) =>setEmail(e.target.value)}
                 />
                <button type='submit'>Subscribe</button>
            </form>
        </>
    )
}

export default Subscribe