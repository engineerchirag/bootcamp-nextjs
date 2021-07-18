import Layout from '../components/layout/layout';
import utilStyles from './posts/posts.module.css';

export default function Covid({ data }) {
    const regions = data.data ? Object.values(data.data.regions) : [];
    return (
        <Layout home>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Covid Stats</h2>
                <table className={utilStyles.table}>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Tested</th>
                            <th>Total Cases</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(regions).map(
                            ({ name, tested, total_cases, recovered, deaths }) => (
                                <tr>
                                    <td>{name}</td>
                                    <td>{tested}</td>
                                    <td>{total_cases}</td>
                                    <td>{recovered}</td>
                                    <td>{deaths}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </section>
        </Layout>
    );
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.quarantine.country/api/v1/summary/latest');
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}
