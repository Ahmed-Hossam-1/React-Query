import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:3000/users/${email}`);
};

const fetchCourses = (channelId) => {
  return axios.get(`http://localhost:3000/channels/${channelId}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;
  console.log(channelId);

  const { data: courses } = useQuery(
    ["course", channelId],
    () => fetchCourses(channelId),
    {
      enabled: !!channelId,
    }
  );

  console.log(courses);
  return <div>DependentQueries</div>;
};

export default DependentQueries;
