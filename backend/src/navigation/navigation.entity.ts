import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Navigation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column({ type: 'timestamp', nullable: true })
  last_scraped_at: Date;
}
