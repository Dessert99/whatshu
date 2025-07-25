import styled from 'styled-components';
import { useState } from 'react';
import EventPanel from './EventPanel';
import SettingPanel from './SettingPanel';

const Container = styled.div`
  height: 3rem;
`;

const Button = styled.button`
  font-size: 1rem;
  width: 5rem;
  height: 2.5rem;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? 'var(--subBg100)' : 'var(--mainBg300)')};
  color: ${(props) => (props.$active ? '#800040' : 'var(--mainBg500)')};
`;

const SwitchMain = (props) => {
  const [activeTab, setActiveTab] = useState('event'); // "event" or "setting"

  return (
    <Container>
      <Button $active={activeTab === 'event'} onClick={() => setActiveTab('event')}>
        이벤트
      </Button>
      <Button $active={activeTab === 'setting'} onClick={() => setActiveTab('setting')}>
        설정
      </Button>
      {activeTab === 'event' && <EventPanel groupId={props.groupId} />}
      {activeTab === 'setting' && <SettingPanel />}
    </Container>
  );
};

export default SwitchMain;
