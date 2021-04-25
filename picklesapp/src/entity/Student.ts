import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class  Student {

	@PrimaryGeneratedColumn()
	id: number;
	
	@Column({
	
		length: 100
	})
  	firstname: string;
  	
  	@Column({
	
		length: 100
	})
  	lastname: string;

  	@Column({
	
		length: 6
	})
  	gender: string;

	@Column()
        dob: Date;
}       
