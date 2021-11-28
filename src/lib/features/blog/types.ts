export interface Post {
	metadata: {
		created: string;
		title: string;
		slug: string;
	};

	path?: string;

	module?: () => void;
}
