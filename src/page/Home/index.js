import PageWrapper from '~/components/PageWrapper';
import SectionWrapper from '~/components/SectionWrapper';
import CompanyList from '~/components/Company';
import Banner from '~/components/Banner1';
import JobQuick from '~/components/JobQuick';
import Profession from '~/components/Profession';

function Home() {
    return (
        <PageWrapper>
            <Banner />
            <SectionWrapper sectionTitle>
                <CompanyList />
            </SectionWrapper>
            <SectionWrapper sectionTitle sectionBoder shouldShowAll sectionImgTitle>
                <JobQuick />
            </SectionWrapper>
            <SectionWrapper sectionTitle>
                <Profession />
            </SectionWrapper>
        </PageWrapper>
    );
}

export default Home;
