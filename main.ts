// import { data } from "./src/user/user.data";
// import { peopleData } from "./src/people/people.data";

// console.log("Data: ", data);

// console.log("People Data: ", peopleData);

import type { Observer } from "rxjs/internal/types";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/internal/operators/map";

import { users } from "./src/users";

/**
 * Hello SKN!
 */
const observable = new Observable<typeof users>((subscribe) => {
	subscribe.next(users);
	subscribe.next(users);
	subscribe.next(users);
	subscribe.next(users);
	subscribe.next(users);
	subscribe.next(users);
	subscribe.next(users);
	subscribe.complete();
}).pipe(
	map((value) => {
		console.log("(1) Got Data From Observable: ", value);
		return value;
	}),
	map((value) => {
		console.log("(2) Got Data From First Operator: ", value);
		return value.filter((user) => user.status === "active");
	}),
	map((value) => {
		console.log("(3) Got Data From Second Operator: ", value);

		const total: number = value.reduce((acc, user) => acc + user.age, 0);

		return total / value.length;
	}),
	map((value) => {
		console.log("(4) Got Data From Third Operator: ", value);

		if (value < 28) throw new Error("Average Age Less Than 30");

		return value;
	})
);

const observer: Observer<number> = {
	next: (value) => {
		console.log("Final Pipeline Processed Data: ", value);
	},
	error: (err: Error) => {
		console.log("Error: ", err.message);
	},
	complete: () => {
		console.log("Data Got Successfully!");
	},
};

observable.subscribe(observer);
