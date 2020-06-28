import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/page.css';
import '../global.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}