import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeamMember } from './team-member.schema';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';

@Injectable()
export class TeamMembersService {
  constructor(
    @InjectModel(TeamMember.name) private teamMemberModel: Model<TeamMember>,
  ) {}

  async create(createTeamMemberDto: CreateTeamMemberDto): Promise<TeamMember> {
    const createdTeamMember = new this.teamMemberModel(createTeamMemberDto);
    return createdTeamMember.save();
  }

  async findAll(): Promise<TeamMember[]> {
    return this.teamMemberModel.find().exec();
  }

  async findOne(id: string): Promise<TeamMember> {
    const teamMember = await this.teamMemberModel.findById(id).exec();
    if (!teamMember) {
      throw new NotFoundException(`Team member with ID ${id} not found`);
    }
    return teamMember;
  }

  async update(id: string, updateTeamMemberDto: UpdateTeamMemberDto): Promise<TeamMember> {
    const updatedTeamMember = await this.teamMemberModel
      .findByIdAndUpdate(id, updateTeamMemberDto, { new: true })
      .exec();
    if (!updatedTeamMember) {
      throw new NotFoundException(`Team member with ID ${id} not found`);
    }
    return updatedTeamMember;
  }

  async remove(id: string): Promise<TeamMember> {
    const deletedTeamMember = await this.teamMemberModel.findByIdAndDelete(id).exec();
    if (!deletedTeamMember) {
      throw new NotFoundException(`Team member with ID ${id} not found`);
    }
    return deletedTeamMember;
  }
}
