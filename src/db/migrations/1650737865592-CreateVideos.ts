import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateVideos1650737865592 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "videos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type: "varchar",
                        isUnique: true
                    }, {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "catergory_id",
                        type: "uuid"
                    },
                    {
                        name: "duration",
                        type: "numeric"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_videos_category",
                        columnNames: ["catergory_id"],
                        referencedTableName: "categories",
                        referencedColumnNames: ["id"],
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("videos")
    }

}
