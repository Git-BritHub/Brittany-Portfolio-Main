import './style.css';

function ProjectModal({ project, closeModal }) {
    return (
        <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <p><a href={project.url} target="_blank" rel="noopener noreferrer">Deployed Project</a></p>
                <p><a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default ProjectModal;