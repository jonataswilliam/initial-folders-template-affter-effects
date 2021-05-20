/*
    @author: Jonatas William
    @version: 1.0.0    
    @date: 19/05/2021
*/
createTemplateFolders = function() {
    const project = app.project.items;
    const elementsFolder = project.addFolder("Elements");
    const compFolder = project.addFolder("Comp");

    const comp = {
        name: 'Pos',
        width: 1920,
        height: 1080,
        pixelAspect: 1,
        duration: 10,
        frameRate: 24
    }

    const renderComp = project.addComp(comp.name, comp.width, comp.height, comp.pixelAspect, comp.duration, comp.frameRate);

    renderComp.parentFolder = compFolder;

    project.addFolder("Movies").parentFolder = elementsFolder;
    project.addFolder("Images").parentFolder = elementsFolder;
    project.addFolder("Renders").parentFolder = elementsFolder;    

    alert('Folders was created!\n\nCreated by Jonatas William (Jow) \nInstagram: @jow.co\nArtstation: https://www.artstation.com/jwfernando')
}

createTemplateFolders();