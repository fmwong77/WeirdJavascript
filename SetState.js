handleClick = () => {
	this.setState((prevState, prevProps) => {
		return { meaningOfLife: prevState.meaningOfLife + 1 };
	}, console.log(this.state.meaningOfLife));
};
