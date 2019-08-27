import { createHashHistory  } from "history";

const history = createHashHistory()

if(history.location.pathname === '/'){
  history.push('/monitoring/devicesConnnection');
}

export default history;
