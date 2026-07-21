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

    return (
        <>
            <Hero />
            <Partners />
            <About />
            <Outcomes />
            <PlatoSection />
            <OpenSourceCallout />
            <Advisors />
            <FAQ />
            <ApplicationForm />
        </>
    );
}

export default Home;
