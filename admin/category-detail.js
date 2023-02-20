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
                              
                            <div class="container">
                              <h4>Ảnh đại diện: </h4>
                              <h4>Ngày tạo: </h4> <p>${item.ngaytao}</p>
                              <h4>Công nghệ:</h4> <p>${item.congnghe}</p>
                              <h4>Tác giả:</h4> <p>${item.tacgia}</p>
                              <h4>Liên kết:</h4> <p style="width: 300px">
                              ${ProjectGallery({
                              imgs: item.gallrey,
        })}</p>
                              <h4>Allbum sản phẩm:</h4> <p >${item.gallrey}</p>
                            </div>
                `
      )
      : ""
    }
            </div>
        `;
};
export default DetailCategoryPage;