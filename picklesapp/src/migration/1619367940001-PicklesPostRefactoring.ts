import {MigrationInterface, QueryRunner} from "typeorm";

export class PicklesPostRefactoring1619367940001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
	    await queryRunner.query(`ALTER TABLE student RENAME COLUMN dob TO birthday`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
	    await queryRunner.query(`ALTER TABLE student RENAME COLUMN birthday TO dob`); //reverts changes back to ori.
    }

}
