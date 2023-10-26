import { appWithTranslation } from 'next-i18next'
import nextI18nextConfig from '../../next-i18next.config'

const App = ({ Component, pageProps }) => (
    <Component {...pageProps} />
)

export default appWithTranslation(App,nextI18nextConfig)
