import settings from "../../settings"
import { ofType, combineEpics } from "redux-observable"
import CrudActionGenerator from '../actions/CrudActionGenerator'
import CrudActionCreatorGenerator from '../action-creators/CrudActionCreatorGenerator'
import { of } from 'rxjs';
import { catchError, switchMap, map, takeUntil, mergeMap, } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import CrudEntetys from '../CrudEntetys'

const epics = [];
const entetys = new CrudEntetys().Keys();

const fetchUserFulfilled = payload => ({ type: "GET_ALL_DEPARTMENT_OK", payload });

entetys.forEach(entety => {
  const crud = new CrudActionGenerator(entety);
  const actionCreator = new CrudActionCreatorGenerator(entety);
  const url = `${settings.crudUrl}/${entety}`;

  const all = (action$, state$) => action$.pipe(
    ofType(crud.GET_ALL_REQ),
    mergeMap(action =>ajax.getJSON(url).pipe(
      map(response => fetchUserFulfilled(response)),//actionCreator.getAllOk(response)),
      takeUntil(action$.pipe(ofType(crud.GET_ALL_CANCEL))),
      catchError(error => of(crud.GET_ALL_ERR, error))
    ))
  );

  epics.push(all);
});

const crudEpics = combineEpics(
  ...epics
);

export default crudEpics;
