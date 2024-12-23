import { useParams } from "react-router-dom";
//  예) /profile/dashboard/:userid  ->   URL 패턴
//      /profile/dashboard/1234     ->   실제  URL
//      :userid -> Path Variable
function Profile() {
  //  Path Variable 받아오기
  const { userid } = useParams();
  return (
    <div>
      <h3 id="profile">Profile</h3>
      <p>This is the Profile page for user {userid}</p>
    </div>
  );
}
export default Profile;
