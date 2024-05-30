import { LegalRecordsEntity } from "../entities/legalRecords.entity";
import { CreateLegalRecordsDTO, UpdateLegalRecordsDTO } from "../dto";

export abstract class LegalRecordsRepository {
    abstract create(legalRecord: CreateLegalRecordsDTO): Promise<LegalRecordsEntity>
    abstract getAll(): Promise<LegalRecordsEntity[]>;
    abstract update(id: string, updatedLegalRecordData: UpdateLegalRecordsDTO): Promise<LegalRecordsEntity | null>;
    abstract delete(id: string): Promise<void>;
};
