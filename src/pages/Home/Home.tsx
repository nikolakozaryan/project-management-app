import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import Guide from '../../components/pages/home/Guide/Guide';
import Start from '../../components/pages/home/Start/Start';
import Team from '../../components/pages/home/Team/Team';

const Home = () => (
  <section>
    <Start />
    <Guide />
    <Team />
  </section>
);

export default Home;
