export default function MyApp({ Component, pageProps }) {
    return (
            <>
            <style>
                {`
                * {
                    font-family: san-serif;
                }`
                }
            </style>
                <Component {...pageProps}/>
             </>
    )

}