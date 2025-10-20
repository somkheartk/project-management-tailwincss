import { IsString, IsEnum, IsArray, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(['todo', 'in-progress', 'review', 'done'])
  status: string;

  @IsEnum(['low', 'medium', 'high', 'urgent'])
  priority: string;

  @IsString()
  @IsNotEmpty()
  assignee: string;

  @IsString()
  @IsNotEmpty()
  projectId: string;

  @IsString()
  @IsNotEmpty()
  dueDate: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
