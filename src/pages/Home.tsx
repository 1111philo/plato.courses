import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Hero from '../components/Hero';
import About from '../components/About';
import Partners from '../components/Partners';
import ApplicationForm from '../components/ApplicationForm';
import Advisors from '../components/Advisors';
import OpenSourceCallout from '../components/OpenSourceCallout';
import PlatoSection from '../components/PlatoSection';
import Outcomes from '../components/Outcomes';
import FAQ from '../components/FAQ';
import { usePageTitle } from '../hooks/usePageTitle';

function Home() {
    usePageTitle();
    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey || ''}>
            <Hero />
            <Partners />
            <About />
            <Outcomes />
            <PlatoSection />
            <OpenSourceCallout />
            <Advisors />
            <FAQ />
            <ApplicationForm />
        </GoogleReCaptchaProvider>
    );
}

export default Home;
