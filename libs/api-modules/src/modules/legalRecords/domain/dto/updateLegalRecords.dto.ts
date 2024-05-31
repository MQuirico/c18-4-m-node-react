import { LegalCaseStatus } from "../entities/legalCase.status.entity";

export class UpdateLegalRecordsDTO {
    constructor(
        public readonly fileNum: string,
        public readonly category: string,
        public readonly responsible: string,
        public readonly client: string,
        public readonly description: string,
        public readonly priority: string,
        public readonly notes: string,
        public readonly attachedDocuments: boolean,
        public readonly status: LegalCaseStatus,
        public readonly deadline?: Date,
    ) {}

    static create(object: { [key: string]: any }): [string?, UpdateLegalRecordsDTO?] {
        const {
            fileNum,
            category,
            responsible,
            client,
            description,
            priority,
            notes,
            attachedDocuments,
            status,
            deadline
        } = object;

        if (!fileNum) return ['fileNum is required', undefined];
        if (!category) return ['category is required', undefined];
        if (!responsible) return ['responsible is required', undefined];
        if (!client) return ['client is required', undefined];
        if (!description) return ['description is required', undefined];
        if (!priority) return ['priority is required', undefined];
        if (!notes) return ['notes is required', undefined];
        if (attachedDocuments === undefined) return ['attachedDocuments is required', undefined];
        if (!status) return ['status is required', undefined];

        return [undefined, new UpdateLegalRecordsDTO(fileNum, category, responsible, client, description, priority, notes, attachedDocuments, status, deadline)];
    };
};
