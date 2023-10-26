interface IUser {
    age: number;
}

class User implements IUser {
    @allowFunction()
    age: number;
}

function allowFunction(num?: number) {
    return (
        target: Object,
        propertyKey: string | symbol
    ) => {
        let value: number;
        const setter = function (newValue: number) {
            if (newValue < 1) {
                console.log(`Нельзя установить значение меньше 1`);
            } else {
                value = newValue;
            }
        }

        const getter = function () {
            return value;
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    }
}

const userService = new User();
userService.age = 10;
console.log(userService.age);
userService.age = -1000;
console.log(userService.age);