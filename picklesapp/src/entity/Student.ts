import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class  Student {

	@PrimaryGeneratedColumn()
	id: number;
	
	@Column({
	
		length: 100
	})
  	firstName: string;
  	
  	@Column({
	
		length: 100
	})
  	lastName: string;

  	@Column({
	
		length: 6
	})
  	gender: string;

	@Column({ 
		type: 'date'
	})
        dob: string;
}       
