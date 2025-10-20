import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Project extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ 
    required: true, 
    enum: ['active', 'planning', 'completed', 'on-hold'],
    default: 'planning'
  })
  status: string;

  @Prop({ required: true, min: 0, max: 100, default: 0 })
  progress: number;

  @Prop({ required: true })
  dueDate: string;

  @Prop({ type: [String], default: [] })
  teamMembers: string[];

  @Prop({ required: true })
  color: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
