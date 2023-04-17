import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { 
  Home, 
  About, 
  Guide, 
  Dkc, 
  Dkr, 
  DetailDkr, 
  Login, 
  DashboardAdmin,
  HomeAdmin,
  AboutAdmin,
  DkcAdmin,
  DkrAdmin,
  GuideAdmin,
  StructureDkrAdmin,
  SkDkrAdmin,
  GpReportAdmin,
  ProgramDkrAdmin,
  DataPotensiAdmin
} from "./pages"

function App() {
  return (
    <Router>
      <div style={{backgroundColor: "#f5f5f5"}}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/guide" exact>
            <Guide />
          </Route>
          <Route path="/dkc" exact>
            <Dkc />
          </Route>
          <Route path="/dkr" exact>
            <Dkr />
          </Route>
          <Route path="/dkr/:dkr_id" exact>
            <DetailDkr />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          
          {/* Admin */}
          <Route path="/admin/dashboard" exact>
            <DashboardAdmin />
          </Route>
          <Route path="/admin/home" exact>
            <HomeAdmin />
          </Route>
          <Route path="/admin/about" exact>
            <AboutAdmin />
          </Route>
          <Route path="/admin/dkc" exact>
            <DkcAdmin />
          </Route>
          <Route path="/admin/dkr" exact>
            <DkrAdmin />
          </Route>
          <Route path="/admin/guide" exact>
            <GuideAdmin />
          </Route>

          {/* DKR */}
          <Route path="/admin/structure-dkr" exact>
            <StructureDkrAdmin />
          </Route>
          <Route path="/admin/sk-dkr" exact>
            <SkDkrAdmin />
          </Route>
          <Route path="/admin/program-dkr" exact>
            <ProgramDkrAdmin />
          </Route>
          <Route path="/admin/data-potensi" exact>
            <DataPotensiAdmin />
          </Route>
          <Route path="/admin/gp-report" exact>
            <GpReportAdmin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;