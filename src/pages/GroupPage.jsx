import React from 'react';
import GroupCard from '../components/groupCard/GroupCard';

const GroupPage = () => {
  return (
    <div>
      <GroupCard title="GDG on Campus HUFS" subTitle="한국외대의 GDGoC" memberCount="50" todoCount="0" doneCount="0" />
      <GroupCard
        title="HUFS N-CUBE 학회"
        subTitle="한국외대 컴공 소속 학회"
        memberCount="30"
        todoCount="30"
        doneCount="2"
      />
      <GroupCard
        title="차세대 보안리더 양성 프로그램"
        subTitle="한국정보기술연구원"
        memberCount="100"
        todoCount="1232515"
        doneCount="1"
      />
      <GroupCard title="대한민국" subTitle="대한민국?" memberCount="50000000000" todoCount="100" doneCount="2" />
    </div>
  );
};

export default GroupPage;
