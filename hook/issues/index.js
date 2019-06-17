export default function issues({ body }, response) {
	const { action } = body;

	actions[action] && actions[action](body);

	response.sendStatus(200);
}

const actions = {
	assigned: null,
	unassigned: null,
	labeled: null,
	unlabeled: null,
	opened: null,
	edited: null,
	milestoned: null,
	demilestoned: null,
	closed: null,
	reopened: null,
};
