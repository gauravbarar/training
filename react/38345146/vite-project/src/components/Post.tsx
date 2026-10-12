import type { ReactNode } from "react";

export type PostProps = {
	name: string;
	children?: ReactNode;
};

const Post = ({ name, children }: PostProps) => {
	return (
		<>
			<div>
				<p>{name}</p>
				<p>{children}</p>
			</div>
		</>
	);
};

export default Post;
