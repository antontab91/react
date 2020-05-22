import React from "react";
import moment from "moment";

const formatDate = (date) => moment(date).format("DD MMM YYYY");

const Profile = (props) => {
  return (
    <>
      <div className="profile__name">
        {`${props.user.firstName} ${props.user.lastName}`}
      </div>
      <div className="profile__birth">
        {`Was born ${props.user.birthPlace} in ${formatDate(props.user.birthDate)}`}
      </div>
    </>
  );
};

export default Profile;