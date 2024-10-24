import Card from 'react-bootstrap/Card';
import { FaArrowRight, FaRegFolderClosed } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";

const ArticleCard = ({ img, title, description, date, comments, badge }) => {
    return (
        <Card className='border-0 shadow'>
            <div className='position-relative'>
                <Card.Img variant="top" src={img} />
                <span className='article-card-badge shadow-sm'>
                    <a href="" className='text-white d-flex gap-2 align-items-center fw-semibold'>
                        <FaRegFolderClosed />
                        {badge}
                    </a>
                </span>
            </div>
            <Card.Header className='d-flex justify-content-between text-dark bg-transparent py-3 px-3'>
                <small className='d-flex gap-2 align-items-center'>
                    <FaUser />
                    Kevin Peterson
                </small>
                <small className='d-flex gap-2 align-items-center'>
                    <FaCalendar />
                    {date}
                </small>
            </Card.Header>
            <Card.Body>
                <Card.Title className='fw-bold fs-5'>
                    {title}
                </Card.Title>
                <Card.Text className='text-muted'>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer d-flex justify-content-between bg-transparent py-3 px-4">
                <a className='d-flex gap-2 align-items-center'>
                    Read More
                    <FaArrowRight />
                </a>
                <a className='d-flex gap-2 align-items-center'>
                    <FaRegCommentDots />
                    Comments off
                </a>
            </Card.Footer>

        </Card>
    );
}

export default ArticleCard;