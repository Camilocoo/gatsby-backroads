import React from "react";
import {Link} from 'gatsby';
import Layout from '../components/layout'


export default () => 
    <React.Fragment>
        <Layout>
            Hello world!
            <Link to="/blog/">Blog page</Link>
        </Layout>
    </React.Fragment>
