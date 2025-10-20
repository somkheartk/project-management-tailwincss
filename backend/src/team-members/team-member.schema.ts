import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class TeamMember extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  avatar: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, default: 0 })
  tasksAssigned: number;

  @Prop({ required: true, default: 0 })
  tasksCompleted: number;
}

export const TeamMemberSchema = SchemaFactory.createForClass(TeamMember);
