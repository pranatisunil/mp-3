import styled from "styled-components";

const StyledMain = styled.main`
    min-height: 100vh;        
    width: 100%;
    min-width: 0;            
    background: pink;
    padding: 24px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    
    overflow-wrap: anywhere;
    word-break: break-word;

    
    @media (max-width: 600px) {
        padding: 16px;
    }
`;

export default function Employment(){
    return(
        <StyledMain>
        <main>
            <h3>Employments History</h3>
            <ol>
                    <li><div> <a href="https://www.adobe.com/home">Adobe</a> - Student Ambassador
            <p>Organized campus-wide Adobe showcase events, attracting 1700+ attendees and boosting brand
                visibility through social media campaigns that generated 10K+ impressions</p>
            <p>Spearheaded 10+ workshops & demos across major BU clubs, driving 300+ new Creative Cloud sign
                -ups, boosting Adobe app adoption by 40%, and positioning Adobe as the primary design platform for
                20+ student projects, hackathons, and pitch decks</p>
            <p>Delivered hands-on training in Photoshop, Illustrator, and Express, empowering 500+ students to create
                professional content</p>
                    </div></li>



                    <li> <div><a href="https://www.180dc.org/">180 Degrees Consulting</a>- Project Manager
                <p>Engineered a scalable inventory tracking system for BU Closet using structured data models
                    and led layout optimization using accessibility-first design principles, improving donation
                    flow efficiency by over 40%</p>
                <p>Developed a data-driven evaluation framework for student-run investment group by sourcing 20+
                    early-stage startups and building an algorithmic shortlisting process that streamlined due
                    diligence for pre-seed and seed-A funding </p> </div></li>



                <li><div><a href="https://trynatics.com/password">Natics</a>- Marketing Intern
                <p>Conceptualized and designed 5 original guerrilla marketing strategies tailored to Natics'
                    brand identity, leveraging competitive research and user psychology to maximize differentiation
                    in a crowded skincare market</p>
                <p>Delivered a detailed execution blueprint outlining rollout timelines, channel selection, budget estimates,
                    and measurable KPIs, equipping the team with a plug-and-play launch model</p>
                </div> </li>



            <li><div><a href=" https://www.buconsultinggroup.com/">BU Consulting Group</a>- Senior Consultant
                <p>Developed a monetization strategy for a social-driven startup by analyzing 10+ competitor models and revenue streams (subscriptions, ads, partnerships) while advising on 5+ strategic partnerships to drive user acquisition and long-term scalability </p>
                <p>Consulted for an ed-fintech startup building a simulated stock market and personal finance learning platform for students; conducted outreach to 10+ East coast banks, led stakeholder interviews, and secured 3 strategic partnership leads</p></div> </li>

        </ol>
        </main>
        </StyledMain>
    );
}