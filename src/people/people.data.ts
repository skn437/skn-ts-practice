import { people } from ".";
import type { PeopleType } from "./people.type";

export const peopleData = people.reduce((data: any, people: PeopleType) => {
	let age: number = people.age;

	data[age] ? data[age].push(people.name) : (data[age] = [people.name]);

	return {
		...data,
	};
}, {});
