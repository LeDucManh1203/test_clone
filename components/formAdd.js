
import { useEffect, router } from "../lib";
// import { projects } from "../../data";
import axios from "axios";
const AdminAddProjectPage = () => {

    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectMoTa = document.getElementById("project-mota");
        const projectCongNghe = document.getElementById("project-mota");
        const projectDate = document.getElementById("project-date");

        const productImages = document.getElementById("product-images");

        form.addEventListener("submit", async function (e) {
            // Chặn sự kiện reload sau khi submit
            e.preventDefault();
            // thêm phần tử vào mảng projects
            const urls = await uploadFiles(productImages.files);
            const formData = {
                name: projectName.value,
                mota: projectMoTa.value,
                congnghe: projectCongNghe.value,
                ngaytao: projectDate.value,


                gallrey: urls,
            }
            // projects.push(formData);
            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/projects"));

            // chuyển hướng về trang admin/projects

        });
    });
    const uploadFiles = async (files) => {
        if (files) {
            const CLOUD_NAME = "dto9oatct";
            const PRESET_NAME = "demo-upload";
            const FOLDER_NAME = "ECMA";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

            const formData = new FormData();
            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);

            for (const file of files) {
                formData.append("file", file);
                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                });
                urls.push(response.data.secure_url);

            }
            return urls;
        }

    };
    return `<div class="container">
            <h1>Thêm sản phẩm</h1>
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Tên dự án</label>
                        <input type="text" class="form-control" id="project-name" />
                        <label for="" class="form-label">Mô tả</label>
                        <input type="text" class="form-control" id="project-mota" />
                        <label for="" class="form-label">Công nghệ</label>
                        <input type="text" class="form-control" id="project-congnghe" />
                        <label for="" class="form-label">Ngày thêm</label>
                        <input type="text" class="form-control" id="project-date" />
                         <label for="usr"> Allbum ảnh:</label>
      <input type="file" multiple class="form-control-file border" id="product-images">
                    </div>
                    <button class="btn btn-primary m-2">Thêm</button>
                </form>
    </div>`;
};

export default AdminAddProjectPage;
