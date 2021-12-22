import './styles.scss';
import TeamCard from './teamcard';

const TeamList = () => (
  <section className="team-list">
    <h1 className="team-list__title">Notre équipe</h1>
    <div className="team-list__profile">
      <TeamCard name="Édouard" rôle="Project manager" imgSrc="https://ca.slack-edge.com/T024XJVRLBC-U026C8QBLAX-532e24405a94-512" githubSrc="https://github.com/edoudup" linkedinSrc="/" />
      <TeamCard name="Xavier" rôle="Product owner" imgSrc="https://media-exp1.licdn.com/dms/image/C4D03AQGyMFcjGnXSUQ/profile-displayphoto-shrink_400_400/0/1623791315962?e=1644451200&v=beta&t=rSYnKPEMiV58Ppc01GkGl2Slm1y7F2WtFNVxBeV_xqE" githubSrc="https://github.com/XavierJoliot" linkedinSrc="https://www.linkedin.com/in/xavier-joliot-12a4a9133/" />
      <TeamCard name="Ophélie" rôle="Lead developer front" imgSrc="https://avatars.githubusercontent.com/u/86596476?v=4" githubSrc="https://github.com/OphelieT" linkedinSrc="https://www.linkedin.com/in/ophelie-thomm/" />
      <TeamCard name="Andrea" rôle="Lead developer back" imgSrc="https://media-exp1.licdn.com/dms/image/C4D03AQG3rL2dyFRLLQ/profile-displayphoto-shrink_800_800/0/1637848300234?e=1644451200&v=beta&t=yfYYnu-9n-4VxkZrikk_j7OPI--yhOxCM3MvfAzWnw4" githubSrc="https://github.com/AndreaDellaBiancia" linkedinSrc="https://www.linkedin.com/in/andrea-della-biancia-8080338b/" />
      <TeamCard name="Nathan" rôle="Git master" imgSrc="https://ca.slack-edge.com/T024XJVRLBC-U02JY6AHV4Y-995ee8155943-512" githubSrc="https://github.com/cajudeleite" linkedinSrc="https://www.linkedin.com/in/nathandod/" />
    </div>

  </section>
);

export default TeamList;
