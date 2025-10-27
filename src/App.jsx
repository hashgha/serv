import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Plan } from './pages/Plan.jsx';
import { Operations } from './pages/Operations.jsx';
import { Pipeline } from './pages/Pipeline.jsx';
import { Campaigns } from './pages/Campaigns.jsx';
import { Proposals } from './pages/Proposals.jsx';
import { AntiChurn } from './pages/AntiChurn.jsx';
import { Expansion } from './pages/Expansion.jsx';
import { KPIs } from './pages/KPIs.jsx';
import { Meetings } from './pages/Meetings.jsx';
import { Checklists } from './pages/Checklists.jsx';
import { Downloads } from './pages/Downloads.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="plan" element={<Plan />} />
        <Route path="operations" element={<Operations />} />
        <Route path="pipeline" element={<Pipeline />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="proposals" element={<Proposals />} />
        <Route path="anti-churn" element={<AntiChurn />} />
        <Route path="expansion" element={<Expansion />} />
        <Route path="kpis" element={<KPIs />} />
        <Route path="meetings" element={<Meetings />} />
        <Route path="checklists" element={<Checklists />} />
        <Route path="downloads" element={<Downloads />} />
      </Route>
    </Routes>
  );
}
