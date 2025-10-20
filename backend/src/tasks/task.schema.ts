import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Task extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ 
    required: true, 
    enum: ['todo', 'in-progress', 'review', 'done'],
    default: 'todo'
  })
  status: string;

  @Prop({ 
    required: true, 
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  })
  priority: string;

  @Prop({ required: true })
  assignee: string;

  @Prop({ required: true })
  projectId: string;

  @Prop({ required: true })
  dueDate: string;

  @Prop({ type: [String], default: [] })
  tags: string[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
