
import { useEffect, router, useState } from "../../lib";
// import { projects } from "../../data";
import axios from "axios";
const AdminEditCatePage = ({id}) => {

    const [project, setProject] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then((response) => response.json())
            .then((data) => setProject(data));
    });

    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectMoTa = document.getElementById("project-mota");
        const projectCongNghe = document.getElementById("project-mota");
        const projectDate = document.getElementById("project-date");
        const projectLink = document.getElementById("project-link");
        const projectTacGia = document.getElementById("project-tacgia");
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
                tacgia: projectTacGia.value,
                lienket: projectLink.value,
                gallery: urls,
            };
           
            fetch(`http://localhost:3000/projects/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/showprojects"));

            

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
            <h1>Sửa sản phẩm</h1>
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Tên dự án</label>
                        <input type="text" class="form-control" id="project-name" value = "${project.name}"/>
                        <label for="" class="form-label">Mô tả</label>
                        <input type="text" class="form-control" id="project-mota" value = "${project.mota}" />
                        <label for="" class="form-label">Công nghệ</label>
                        <input type="text" class="form-control" id="project-congnghe" value = "${project.congnghe}" />
                        <label for="" class="form-label">Ngày thêm</label>
                        <input type="text" class="form-control" id="project-date" value = "${project.name}" />
                        <label for="" class="form-label">Tác giả</label>
                        <input type="text" class="form-control" id="project-tacgia" value = "${project.tacgia}" />
                        <label for="" class="form-label">Đường đẫn</label>
                        <input type="text" class="form-control" id="project-link" value = "${project.lienket}" />
                        <label for="usr"> Allbum ảnh:</label>
                        <input type="file" multiple class="form-control-file border" id="product-images">
                    </div>
                    <button class="btn btn-primary m-2">Sửa</button>
                </form>
    </div>`;
};

export default AdminEditCatePage;
