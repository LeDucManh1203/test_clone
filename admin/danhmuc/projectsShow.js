import { useEffect, useState } from "../../lib";
import ProjectGallery from "../projectGallery";
const projectsShow = () => {

    const [categorys, setCategory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/projects`)
            .then((rest) => rest.json())
            .then((data) => setCategory(data));
    }, []);
    // Xóa

    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');

        for (let btn of btns) {
            btn.addEventListener('click', function () {
                // lấy id
                const id = btn.dataset.id;
                // lọc ra các phần từ khác id
                fetch(`http://localhost:3000/projects/${id}`, {
                    method: 'DELETE',
                }).then(() => {
                    const newCategory = categorys.filter((category) => category.id != id);
                    setCategory(newCategory);
                })
            })
        }


    })

    return `<div class=" text-center bg-light">
  <h1>Quản lý danh mục dự án</h1>
</div>

<div class="container pt-5">
  <h1>Quản lý dự án</h1>
  <button class="btn btn-success m-2 "><a class="link-warning text-decoration-none" href="/formadd">Thêm</a></button>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>STT</th>
        <th style="width: 200px">avatar</th>
        <th>Tên dự án</th>
        <th style="width: 400px">Mô tả</th>
        <th>Ngày tạo</th>
        <th>Tác giả</th>
        <th>Liên kết</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

    ${categorys.map((item, index) => `
      <tr>
        <td>${index + 1}</td>
        <td> <p style= "height:300px; overflow:scroll"> ${item.gallery ? ProjectGallery({
            imgs: item.gallery,}): ""} </p></td>
        <td>${item.name}</td>
        <td>${item.mota}</td>
        <td>${item.ngaytao}</td>
        <td>${item.tacgia}</td>
        <td>${item.lienket}</td>
        <td>
          <button data-id="${item.id}" class="btn btn-danger btn-remove">
            Xóa
          </button>
          <a class="btn btn-info" href="#/admin/showprojects/${item.id}/edit">Sửa</a>
        </td>
      </tr>
      `).join('')}
    </tbody>
  </table>
</div>`;
}

export default projectsShow