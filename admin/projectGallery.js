const ProjectGallery = ({ imgs }) => {
    console.log('imgs: ', imgs);
    return `${imgs.map(item => {
        return `<img src=${item} />`
    }).join('')}`;
};
export default ProjectGallery;