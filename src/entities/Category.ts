import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Category, (video) => video, { cascade: true })
  @JoinColumn({ name: "catergory_id" })
  category: string;
  constructor() {
    if (!this.id) this.id = uuid();
  }
}
