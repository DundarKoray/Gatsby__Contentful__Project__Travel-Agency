import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SimpleHero from "../components/SimpleHero/SimpleHero"
import Banner from '../components/Banner/Banner'

export default () => (
    <Layout>
        <SimpleHero>
            <Banner 
                title="continue exploring"
                info="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            >
                <Link className="btn-white" to="/tours">explore tours</Link>
            </Banner>
        </SimpleHero>
    </Layout>
)
