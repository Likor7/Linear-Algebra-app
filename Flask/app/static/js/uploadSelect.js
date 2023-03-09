const templateSelector = document.getElementById('template-selector');
const templateContainer = document.getElementById('template-container');

const templates = {
    matrix: `
<form class="form" role="form" enctype="multipart/form-data" action="/calculator/matrix/uploaded/"
    method="post">
    <h2>Matrix upload</h2>
    <div class="input-group mb-3">
        <label class="input-group-text" for="fileA">A</label>
        <input type="file" class="form-control" name="fileA" id="fileA">
    </div>
    <div class="input-group mb-3">
        <label class="input-group-text" for="fileB">B</label>
        <input type="file" class="form-control" name="fileB" id="fileB">
    </div>
    <div class="d-flex justify-content-center ">
        <button class="btn btn-primary" name="upload_button" type="submit">Upload</button>
    </div>
</form>
`,
    systems: '<h2>Systems upload</h2>',
};

templateContainer.innerHTML = templates[templateSelector.value];

templateSelector.addEventListener('change', function () {
    const selectedTemplate = templateSelector.value;
    templateContainer.innerHTML = templates[selectedTemplate];
});