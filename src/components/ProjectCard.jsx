import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col sm={6} md={4}>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="proj-imgbx">
                    {/* <img src={imgUrl} alt={title} /> */}
                    <img src={imgUrl} alt={title} style={{ height: '300px'}} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}
