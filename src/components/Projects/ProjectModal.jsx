import { CgClose } from "react-icons/cg";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import './style.css';

function ProjectModal({ project, closeModal }) {
    return (
        <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <div className="modal-links d-flex justify-content-center align-items-center">
                  <p><a href={project.url} target="_blank" rel="noopener noreferrer">
                    <HiExternalLink />
                  </a></p>
                  <p><a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a></p>
                  <button className="close-modal-btn" onClick={closeModal}>
                   < CgClose />
                  </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;