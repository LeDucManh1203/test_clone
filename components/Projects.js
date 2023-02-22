import { useEffect, useState } from "../lib";


import ProjectGallery from "../admin/projectGallery";
const Projects = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/projects`)
      .then((rest) => rest.json())
      .then((data) => setCategory(data));
  }, []);

  return `
  
</div>
  <div class="container">
            <div class="row">
              <div class="col-md-6 ml-auto mr-auto">
                <div class="h4 text-center mb-4 title">Các sản phẩm của tôi</div> <!--PRODUCT            -->
                <div class="nav-align-center">              
                  <ul class="nav nav-pills nav-pills-primary" role="tablist">
                    <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#web-development"
                        role="tablist"><i class="" aria-hidden="true" style="font-size: 15px;">All</i></a></li>
                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="/#graphic-design" role="tablist"><i
                          class="" aria-hidden="true">JS</i></a></li>
                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="/#graphic-design" role="tablist"><i
                          class="" aria-hidden="true">PHP</i></a></li>
                  </ul>
                </div>
              </div>
            </div>                      
            <div class="tab-content gallery mt-5">
          
        <div class="tab-pane active" id="web-development">
            <div class="ml-auto mr-auto">
                <div class="row">
                ${category.length > 1 ? category.map(
    (item) => `
                    <div class="col-md-6">
                        <div class="cc-porfolio-image img-raised" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">                          
                                <a href="#/category/${item.id}">                                                 
                                <figure class="cc-effect"><img src=""/>${item.avatar ? ProjectGallery({
      imgs: item.avatar,
    }) : ''}
                                    <figcaption>                                
                                        <div class="h4">${item.name}</div>
                                        <p>Web Development</p>
                                        
                                    </figcaption>
                                </figure>                               
                            </a>
                        </div>
                        </div>
                        `).join('') : ""}
                    
                    
                            
                </div>
            </div>
        </div>
    </div>
  `;
}

export default Projects