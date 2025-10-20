import { IsString, IsEnum, IsNumber, IsArray, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(['active', 'planning', 'completed', 'on-hold'])
  status: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  progress: number;

  @IsString()
  @IsNotEmpty()
  dueDate: string;

  @IsArray()
  @IsString({ each: true })
  teamMembers: string[];

  @IsString()
  @IsNotEmpty()
  color: string;
}
