import EmployerHero from '../components/partners/EmployerHero';
import WhyHire from '../components/partners/WhyHire';
import HiringProcess from '../components/partners/HiringProcess';
import EmployerForm from '../components/partners/EmployerForm';
import CaseStudy from '../components/partners/CaseStudy';
import Partners from '../components/Partners';
import { usePageTitle } from '../hooks/usePageTitle';

function PartnersPage() {
    usePageTitle('For Employers');

    return (
        <>
            <EmployerHero />
            <WhyHire />
            <Partners />
            <CaseStudy />
            <HiringProcess />
            <EmployerForm />
        </>
    );
}

export default PartnersPage;
