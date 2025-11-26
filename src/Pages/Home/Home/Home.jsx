import React from 'react';
import AnimatedSlider from '../../../Components/AnimatedSlider';
import ExploreIssues from '../ExploreIssues/ExploreIssues';
import IssueLatest from '../../IssueLatest/IssueLatest';
import AllIssues from '../../AllIssues/AllIssues';

const Home = () => {
    return (
        <div>
            <AnimatedSlider></AnimatedSlider>
            <ExploreIssues></ExploreIssues>
            <IssueLatest></IssueLatest>
           
        </div>
    );
};

export default Home;