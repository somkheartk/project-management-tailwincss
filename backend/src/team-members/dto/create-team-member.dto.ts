import { IsString, IsEmail, IsNumber, Min, IsNotEmpty } from 'class-validator';

export class CreateTeamMemberDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @Min(0)
  tasksAssigned: number;

  @IsNumber()
  @Min(0)
  tasksCompleted: number;
}
