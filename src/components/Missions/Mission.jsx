import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/Missions/Missions';

function Mission({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();

  const join = () => {
    dispatch(joinMission(id));
  };

  return (
    <>
      <tr key={id}>
        <td className="border">{name}</td>
        <td style={{maxWidth: '40rem'}} className="border">{description}</td>
        <td className="border"><Badge bg="secondary">NOT A MEMBER</Badge></td>
        <td className="border"><Button id={id} onClick={reserved ? '' : join} variant={reserved ? 'outline-danger' : 'outline-secondary'}>{reserved ? 'Leave Misson' : 'Join Mission'}</Button></td>
      </tr>
    </>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default Mission;
