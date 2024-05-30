export abstract class ForUserApiControllerRepo {
    abstract create(req: any, res: any): any
    abstract getAll(req: any, res: any): any;
    abstract getById(req: any, res: any): any;
    abstract update(req: any, res: any): any;
    abstract delete(req: any, res: any): any; 
}