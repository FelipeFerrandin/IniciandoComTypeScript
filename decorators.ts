//@Component
//Selector
//@useState("dsadsa")

//Factory
function Logger(prefix: string) {
    return (target: any) => {
        console.log(`${prefix} - ${target}`)
    }
}

@Logger("primeiro decorator")
class Foo {
}

//Class decorator

function SetAPIVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@SetAPIVersion("1.0.0")
class API {

}

console.log(new API())

//Property decorator

function minLenght(lenght: number) {
    return (target: any, key: string) => {
        let val = target[key];
        const getter = () => val;
        const setter = (value: string) => {
            if (value.length < lenght) console.log(`Error: você não pode criar ${key} com tamanho menor que ${lenght}`);
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    }
}


class Movie {
    @minLenght(5)
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

console.log(new Movie("Teste"))

function Delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any) {
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms);
            return descriptor;
        }
    }
}

//Methods decorator

class Greeter {
    gretting: string;

    constructor(gretting: string) {
        this.gretting = gretting;
    }

    // esperar um pouco e roda o metodo
    @Delay(1000)
    greeter() {
        console.log(`Hello! ${this.gretting}`)
    }
}

console.log(new Greeter("Pessoa").greeter());


//Parameter decorator
//Accessor decorator

