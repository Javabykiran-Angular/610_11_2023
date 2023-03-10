
import {Shape} from './shape';

export class Rectangle extends Shape
{
        length:number;
        breadth:number;
        area:number;

        constructor(l:number,b:number){
            super();
            this.length=l;
            this.breadth=b;
            this.area=0;
        }

        override myArea(): void {
            this.area=this.length*this.breadth;
        }

        display(){
            console.log(`
                ------- Rectangle area------
                Length   :: ${this.length}
                Breadth  :: ${this.breadth}
                Area     :: ${this.area}
            `)
        }
}