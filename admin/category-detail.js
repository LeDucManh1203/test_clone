import { useEffect, useState } from "../lib";
import ProjectGallery from "./projectGallery";
const DetailCategoryPage = ({ id }) => {
  const [category, setCategory] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/categoryProjects/${id}?_embed=projects`)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  return `
       
            <div>
              
            </div>
            <div class="projectInfo">
                ${category.projects
      ? category.projects.map(
        (item) => `
                              <div class="jumbotron text-center">
                              <h1>${item.name}</h1>
                              <p>${item.mota}</p> 
                            </div>
                              
                            <div class="container " >
                              <h4>Ảnh đại diện: </h4> <p class"text-center" style= "width : 1000px">${ProjectGallery({imgs: item.avatar,})}</p>
                              <h4>Ngày tạo: </h4> <p>${item.ngaytao}</p>
                              <h4>Công nghệ:</h4> <p>${item.congnghe}</p>
                              <h4>Tác giả:</h4> <p>${item.tacgia}</p>
                              <h4>Liên kết:</h4> <p style="width: 1000px; margin: 20px;" class="">
                              ${ProjectGallery({
                              imgs: item.gallery,})}</p>
                            </div>
                `
      )
      : ""
    }
            </div>
        `;
};
export default DetailCategoryPage;