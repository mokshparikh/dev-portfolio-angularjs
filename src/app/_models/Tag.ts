export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly HTML = new Tag('Html', 'blue');  
    static readonly CSS = new Tag('Css', 'green');   
    static readonly React = new Tag('React', 'darkred');  
    static readonly Java = new Tag('springboot', 'pink');  
    static readonly NodeJs = new Tag('Node Js', 'green');
    static readonly ExpressJs = new Tag('Express Js', 'yellow');
    static readonly NET = new Tag('Net', 'orange');
    static readonly TYPESCRIPT = new Tag('Typescript', 'orange');

    private constructor(private readonly key: string, public readonly color: string) {}

    
    toString() {
        return this.key;
    }
}
