import EduHero from '../components/edu/EduHero';
import PartnerBenefits from '../components/edu/PartnerBenefits';
import PartnerRequirements from '../components/edu/PartnerRequirements';
import PartnershipProcess from '../components/edu/PartnershipProcess';
import EduPartnerForm from '../components/edu/EduPartnerForm';
import Partners from '../components/Partners';
import { usePageTitle } from '../hooks/usePageTitle';

function EduPartnersPage() {
    usePageTitle('For EDU Partners');

    return (
        <>
            <EduHero />
            <PartnerBenefits />
            <PartnerRequirements />
            <PartnershipProcess />
            <Partners />
            <EduPartnerForm />
        </>
    );
}

export default EduPartnersPage;
