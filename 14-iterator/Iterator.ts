export {}

interface ITasks {
    id: number,
    date: Date,
    title: string
}

type TSort = 'id' | 'date'

class TaskList {
    private tasks: ITasks[] = [];

    public sortById() {
        this.tasks = this.tasks.sort((a, b) => {
            if (a.id > b.id) {
                return 1;
            } else if (a.id == b.id) {
                return 0;
            } else {
                return -1;
            }
        })
    }

    public sortByDate() {
        this.tasks = this.tasks.sort((a, b) => {
            if (a.date > b.date) {
                return 1;
            } else if (a.date == b.date) {
                return 0;
            } else {
                return -1;
            }
        })
    }

    public addTask(task: ITasks) {
        this.tasks.push(task);
    }

    public getTasks() {
        return this.tasks;
    }

    public count() {
        return this.tasks.length;
    }

    public getIterator(sort: TSort) {
        return new TaskItearator(this, sort);
    }
}

interface IIterator<T> {
    current(): T | undefined;
    next(): T | undefined;
    prev(): T | undefined;
    index(): number;
    count(): number;
}

class TaskItearator implements IIterator<ITasks> {
    private position: number = 0;
    private taskList: TaskList;
    public sort: TSort

    constructor(taskList, sort: TSort) {
        this.sort = sort
        if(this.sort === 'id'){
            taskList.sortById();
        } else {
            taskList.sortByDate();
        }
        this.taskList = taskList;
    }

    current(): ITasks | undefined {
        return this.taskList.getTasks()[this.position];
    }
    next(): ITasks | undefined {
        this.position += 1;
        return this.taskList.getTasks()[this.position];
    }
    prev(): ITasks | undefined {
        this.position -= 1;
        return this.taskList.getTasks()[this.position];
    }
    index(): number {
        return this.position;
    }
    count(): number {
        return this.taskList.count()
    }
}

const taskList = new TaskList();
taskList.addTask({ id: 2, date: new Date("01-02-2022"), title: 'Test3' });
taskList.addTask({ id: 3, date: new Date("01-02-2023"), title: 'Test3' });
taskList.addTask({ id: 1, date: new Date("01-02-2024"), title: 'Test3' });
const iterator = taskList.getIterator("id");
console.log(iterator.current())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.prev())
console.log(iterator.index())
console.log(iterator.count())