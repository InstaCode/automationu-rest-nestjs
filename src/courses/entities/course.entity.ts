import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('course')
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  subject: string;

  @Column({ nullable: true })
  courseCode: string;

  @Column({ nullable: true })
  section: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column({ nullable: true })
  time: string;

  @Column({ nullable: true })
  credits: number;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  instructor: string;

  @Column({ nullable: true })
  deliveryMethod: string;

  @Column({ nullable: true })
  buildingRoom: string;

  @Column({ nullable: true })
  classSize: number;

  @Column({ nullable: true })
  enrolled: number;

  @Column({ nullable: true })
  tuitionResident: number;

  @Column({ nullable: true })
  tuitionNonResident: number;

  @Column({ nullable: true })
  courseFees: number;
}
