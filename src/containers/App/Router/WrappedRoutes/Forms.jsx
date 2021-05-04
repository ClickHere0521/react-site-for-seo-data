import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BasicForm from '../../../Form/ReduxForm/BasicForm/index';
import CheckFormControls from '../../../Form/ReduxForm/CheckFormControls/index';
import FileUpload from '../../../Form/ReduxForm/FileUpload/index';
import FloatingLabelsForm from '../../../Form/ReduxForm/FloatingLabelsForm/index';
import FormDropzone from '../../../Form/ReduxForm/FormDropzone/index';
import FormLayouts from '../../../Form/ReduxForm/FormLayouts/index';
import FormPicker from '../../../Form/ReduxForm/FormPicker/index';
import FormValidation from '../../../Form/ReduxForm/FormValidation/index';
import MaskForm from '../../../Form/ReduxForm/MaskForm/index';
import MaterialForm from '../../../Form/ReduxForm/MaterialForm/index';
import WizardForm from '../../../Form/ReduxForm/WizardForm/index';
import BasicHookForm from '../../../Form/ReactHookForm/BasikHookForm';
import FormHookValidation from '../../../Form/ReactHookForm/FormHookValidation';
import FormHookWizard from '../../../Form/ReactHookForm/WizardForm';

export default () => (
  <Switch>
    <Route path="/forms/redux_form/basic_form" component={BasicForm} />
    <Route path="/forms/redux_form/check_form_controls" component={CheckFormControls} />
    <Route path="/forms/redux_form/file_upload" component={FileUpload} />
    <Route path="/forms/redux_form/floating_labels_form" component={FloatingLabelsForm} />
    <Route path="/forms/redux_form/form_dropzone" component={FormDropzone} />
    <Route path="/forms/redux_form/form_layouts" component={FormLayouts} />
    <Route path="/forms/redux_form/form_picker" component={FormPicker} />
    <Route path="/forms/redux_form/form_validation" component={FormValidation} />
    <Route path="/forms/redux_form/mask_form" component={MaskForm} />
    <Route path="/forms/redux_form/material_form" component={MaterialForm} />
    <Route path="/forms/redux_form/wizard_form" component={WizardForm} />
    <Route path="/forms/react_hook_form/basic_form" component={BasicHookForm} />
    <Route path="/forms/react_hook_form/form_validation" component={FormHookValidation} />
    <Route path="/forms/react_hook_form/wizard_form" component={FormHookWizard} />
  </Switch>
);
