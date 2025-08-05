import { Injectable } from '@nestjs/common'

const local_users = [
	{
		id: 1,
		fullName: 'John Doe',
	},
	{
		id: 2,
		fullName: 'Jane Smith',
	},
	{
		id: 3,
		fullName: 'Alice Johnson',
	},
	{
		id: 4,
		fullName: 'Bob Brown',
	},
]

@Injectable()
export class UsersService {
	private users = local_users

	findAll() {
		return this.users
	}
}
