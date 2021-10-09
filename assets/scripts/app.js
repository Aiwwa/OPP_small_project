class Tooltip {}

class ProjectItem {
    constructor(id) {
        this.id = id;
    }
}

class ProjectList {
    // Fields are concerted to properties before other constructor logic runs.
    projects = [];
    constructor(type) {
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        prjItems.forEach(item => {
            this.projects.push(new ProjectItem(item.id));
        });
        console.log(this.projects)
    }
}

class App {

    static init () {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }

    static hello () {
        console.log(1);
    }
}

App.init();
App.hello()