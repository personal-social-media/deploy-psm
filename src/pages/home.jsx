import {ConfigureNewServerForm} from '../server/configure-new-server-form';
import ServerStatusWrapper from '../server/server-status-wrapper';

export default function HomePage() {
  return (
    <div>
      <ServerStatusWrapper>
        <ConfigureNewServerForm/>
      </ServerStatusWrapper>
    </div>
  );
}
