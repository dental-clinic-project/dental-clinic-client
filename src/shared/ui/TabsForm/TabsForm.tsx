import { FC } from 'react';

import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import s from './tabsForm.module.scss';

const TabsForm: FC<{ typeForm: string }> = ({ typeForm }) => {
  return (
    <div className={s.tabs} data-testid="tabs">
      <Button className={s.tabs_submit}>{typeForm === 'login' ? 'Log in' : 'Sign up'}</Button>

      <Link to="/authentication" className={s.tabs_cancel} type="button" data-testid="cancel">
        Cancel
      </Link>
    </div>
  );
};

export default TabsForm;
