import { LegalCaseStatus } from "./legalCase.status.entity";

export class LegalRecordsEntity {
    public readonly id: string;
    public fileNum: string;
    public lastUpdate: Date;
    public category: string;
    public responsible: string;
    public status: LegalCaseStatus;
    public creationDate: Date;
    public client: string;
    public description: string;
    public priority: string;
    public deadline?: Date;
    public notes: string;
    public attachedDocuments: boolean;

    constructor(legalRecord: {
        readonly id: string;
        fileNum: string;
        lastUpdate: Date;
        category: string;
        responsible: string;
        status: LegalCaseStatus;
        creationDate: Date;
        client: string;
        description: string;
        priority: string;
        deadline?: Date;
        notes: string;
        attachedDocuments: boolean;
    }) {
        this.id = legalRecord.id;
        this.fileNum = legalRecord.fileNum;
        this.lastUpdate = legalRecord.lastUpdate;
        this.category = legalRecord.category;
        this.responsible = legalRecord.responsible;
        this.status = legalRecord.status;
        this.creationDate = legalRecord.creationDate;
        this.client = legalRecord.client;
        this.description = legalRecord.description;
        this.priority = legalRecord.priority;
        this.deadline = legalRecord.deadline;
        this.notes = legalRecord.notes;
        this.attachedDocuments = legalRecord.attachedDocuments;
    }
}
