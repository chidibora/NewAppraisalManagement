import React from 'react';
import { Switch, Route } from 'react-router';
import { pure } from 'recompose';

import ProtectedRoute from './ProtectedRoute';

import Dashboard from '../components/pages/Dashboard';
import DevApprover from '../components/pages/DevApprover';
import Competency from '../components/pages/Competency';
import Assessment from '../components/pages/Assessment';

import MdaSetup from '../components/pages/MdaSetup';
import RolesSetup from '../components/pages/RolesSetup';
import EmployeeProfile from '../components/pages/EmployeeProfile';
import EmployeeDetails from '../components/pages/EmployeeDetails';
import SupervisorOrganogram from '../components/pages/SupervisorOrganogram';
import AppraisalApp from '../components/pages/AppraisalApp';
import PerfPlanning from '../components/pages/PerPlanning';

export default pure(() => (
  <Switch>
    <ProtectedRoute
      path="/admin-portal/"
      exact
      component={Dashboard}
    />
    <ProtectedRoute
      path="/admin-portal/mda-setup"
      exact
      component={MdaSetup}
    />
    <ProtectedRoute
      path="/admin-portal/roles-setup"
      exact
      component={RolesSetup}
    />
    <ProtectedRoute
      path="/admin-portal/dev-approver"
      exact
      component={DevApprover}
    />
    <ProtectedRoute
      path="/admin-portal/create-competency"
      exact
      component={Competency}
    />

<ProtectedRoute
      path="/admin-portal/Qual-assessment"
      exact
      component={Assessment}
    />

<ProtectedRoute
      path="/admin-portal/appraisal-approval"
      exact
      component={AppraisalApp}
    />

<ProtectedRoute
      path="/admin-portal/perform-planning"
      exact
      component={PerfPlanning}
    />



    <ProtectedRoute
      path="/admin-portal/employee-profile"
      exact
      component={EmployeeProfile}
    />
    <ProtectedRoute
      path="/admin-portal/employee-details"
      exact
      component={EmployeeDetails}
    />
    <ProtectedRoute
      path="/admin-portal/supervisor-organogram"
      exact
      component={SupervisorOrganogram}
    />
    <Route render={() => <h1>Error 404. Page not found.</h1>} />
  </Switch>
));
