import {isEmpty} from 'lodash';
import ServerStatus from './server-status';
import useLocalStorage from 'react-use-localstorage';

export default function ServerStatusWrapper({children}) {
  const [serverStatus] = useLocalStorage('server-status');

  if (isEmpty(serverStatus)) return children;

  return <ServerStatus/>;
}
