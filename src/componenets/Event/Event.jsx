import PropTypes from 'prop-types'
// import css from './Event.module.css'
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { formatEventStart } from '../../Utils/formatEventStart'
import { formatEventDuration } from '../../Utils/formatEventDuration'
import { Card, EventTitle, Info, Chip } from './Event.styled'
import { iconSize } from '../../Constants/iconSize'
export const Event = ({ name, location, speaker, type, start, end }) => {
    const formStart = formatEventStart(start);
    const duration = formatEventDuration(start, end);

    return (
        <Card >
            <EventTitle>{name}</EventTitle >
            <Info>
                <FaMapMarkerAlt size={iconSize.sm} />
                {location}
            </Info>
            <Info>
                <FaUserAlt size={iconSize.sm} />
                {speaker}
            </Info>
            <Info >
                <FaCalendarAlt size={iconSize.sm} />
                {formStart}
            </Info>
            <Info>
                <FaClock size={iconSize.sm} />
                {duration}
            </Info>
            <Chip EventType={type}>{type}</Chip>
        </Card>
    );
};

Event.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.string,
    type: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,


}