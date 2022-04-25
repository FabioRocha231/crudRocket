import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";

@Entity("videos")
export class Video {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column()
  category_id: string;

  @ManyToOne(() => Category, (category) => category.id, { cascade: true })
  @JoinColumn({ name: "catergory_id" })
  category: Category;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
