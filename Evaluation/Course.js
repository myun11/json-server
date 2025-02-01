const Api = (() => {
    const getDataList = async () => {
        return await fetch("http://localhost:4232/courseList/").then((dataList) => {
            console.log(dataList);
           return dataList.json()
        })
    }

    return { getDataList }

})()
const View = (() => {
    // Everything that related to HTML template
    // console.log(document)
    const domSelector = {
        // input: document.querySelector("#todoListInput"),
        // addBtn: document.querySelector("#addButton"),
        availableContainer: document.querySelector('#course-container-available'),
        selectedContainer: document.querySelector('#course-container-selected'),
        rightContainer: document.querySelector('#right-container'),
        individualCourse: document.querySelector('#individual-course'),
        totalCredits: document.querySelector('#total-credits'),
        selectButton: document.querySelector("#selectButton"),

    }
    

    // console.log(domSelector)

    // https://jsonplaceholder.typicode.com/todos

    // create Template
    const createTemplate = (dataList, text) => {
        let template = ""
        if (text == "selected") {
            template = "<h2>Selected Courses</h2>"
        } else {
            template = "<h2>Available Courses</h2>"
        }
        // console.log("dataList is, ", dataList);
        dataList.forEach(item => {

            template += 
            `<div class="individual-course" id="item${item.courseId}">
                ${item.courseName} <br/>
                Course Type: ${item.required ? "Elective" : "Compulsory" } <br/>
                Course Credit: ${item.credit} <br/>
            </div>`
        });
        return template;
    }

    // embed template into html / rerender template

    const render = (element, innerHTMLTemplate) => {
        element.innerHTML = innerHTMLTemplate;
    }

    return {
        domSelector,
        createTemplate,
        render
    }
})()

const Model = ((view, api) => {

    const { domSelector, createTemplate, render } = view
    const { getDataList } = api;

    class State {
        // constructor
        constructor() {
            this._dataList = []
            this._selectedList = []
        }

        get dataList() {
            return this._dataList
        }

        set dataList(newList) {
            this._dataList = newList
            const template = createTemplate(this._dataList)
            render(domSelector.availableContainer, template)
        }
        get selectedList() {
            return this._selectedList
        }
        set selectedList(newList) {
            this._selectedList = newList
            const template = createTemplate(this._selectedList)
            // render(domSelector.selectedContainer, template)
        }

        get totalCredits() {
            this._totalCredits = 0
            this._selectedList.forEach(item => {
                this._totalCredits += item.credit
            })
            return this._totalCredits
        }

        // get selectedList() {
        //     return this._selectedList
        // }
        // set selectedList(newList) {
        //     this._selectedList = newList
        //     const template = createTemplate(this._selectedList)
        //     render(domSelector.selectedContainer, template)
        // }
    }

    return { State, getDataList }
})(View, Api)

const Controller = ((view, model) => {

    const { domSelector, render, createTemplate } = view
    const { State, getDataList } = model
    const state = new State()

    const bootstrap = () => {
        getDataList().then(res => {
            state.dataList = res
        })
    }

    domSelector.availableContainer.addEventListener('click', (event) => {

        // console.log(event);

        // Checks if it's blue or white (selected or not selected)
        if (state.selectedList.includes(state.dataList.find(item => item.courseId == Number(event.target.id.split("item")[1])))) {
            event.target.style.backgroundColor = "white";
            state.selectedList = [...state.selectedList].filter(item => item.courseId != Number(event.target.id.split("item")[1]));
        } else {
            // Checks if total credits is more than 18
            const course = state.dataList.find(item => item.courseId == Number(event.target.id.split("item")[1]))
            const tempTotal = Number(state.totalCredits) + Number(course.credit)
            if (state.totalCredits + course.credit > 18) {
                alert("You have chosen " + tempTotal + " credits for this semester. You cannot choose more than 18 credits.")
            } else {
                event.target.style.backgroundColor = "deepskyblue";
                state.selectedList = [...state.selectedList, state.dataList.find(item => item.courseId == Number(event.target.id.split("item")[1]))];
            }
        }
        domSelector.totalCredits.textContent = state.totalCredits
        // console.log(state.selectedList);
        // 
        // state.selectedList = [...state.selectedList, state.dataList.find(item => item.courseId == Number(event.target.id.split("item")[1]))];
        
        // Other method
        // const id = event.target.id.split("item");
        // state.selectedList = [...state.selectedList, state.dataList.find(item => item.courseId == Number(id[1]))];
        // state.dataList = [...state.dataList].filter(item => item.courseId != Number(id[1]));
        // console.log(state.selectedList);       
    })

    // domSelector.selectedContainer.addEventListener('click', (event) => {
    //     const id = event.target.id.split("item");
    //     state.dataList = [...state.dataList, state.selectedList.find(item => item.courseId == Number(id[1]))].sort((a,b) => a.courseId - b.courseId);
    //     state.selectedList = [...state.selectedList].filter(item => item.courseId != Number(id[1]));
    //     console.log(state.selectedList);       
    // })

    domSelector.selectButton.addEventListener('click',(event)=>{
        const decision = confirm("You have chosen " + state.totalCredits + " credits for this semester. You cannot change once you submit. Do you want to confirm?")
        
        if (decision) {
            const template = createTemplate(state.selectedList, "selected")
            render(domSelector.rightContainer, template)
            state.dataList = state.dataList.filter(item => !state.selectedList.includes(item))

            state.selectedList = []
            domSelector.selectButton.disabled = true;
        }
    })

    return {bootstrap}

})(View, Model)

Controller.bootstrap()