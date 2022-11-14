import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProjectFullScreen from '../../components/Projects/ProjectFullScreen';
import RegAddPhoto from '../../components/RegAddPhoto';
import AboutGuild from '../../pages/aboutGuild';
import AddProject from '../../pages/addProject';
import CurrentProjects from '../../pages/currentProjects';
import DoneProjects from '../../pages/doneProjects';
import GuildMembers from '../../pages/guildMembers';
import Home from '../../pages/Home';
import HowItWorks from '../../pages/howItWorks';
import Login from '../../pages/login';
import NotFound404 from '../../pages/notFound404';
import Registration from '../../pages/registration';

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration/addPhoto" element={<RegAddPhoto />} />
        <Route path="/currentProjects" element={<CurrentProjects />} />
        <Route path="/doneProjects" element={<DoneProjects />} />
        <Route path="/aboutGuild" element={<AboutGuild />} />
        <Route path="/guildMembers" element={<GuildMembers />} />
        <Route path="/howItWorks" element={<HowItWorks />} />
        <Route path="/projects/:projectId" element={<ProjectFullScreen />} />
        <Route path="/profile/projectAdd" element={<AddProject />} />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </main>
  );
};

export default Main;
