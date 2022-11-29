import React from 'react';



function ProjectCard ({title, description}) {
    return (  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="./imgs/aids.jpeg" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>);
}



export default ProjectCard;