
PS: inline style winnes over linked even in react after webpack build

If a component is only passing props forward, IT can have defaulProps to pass,
but if IT is passed state/props then defaultProps or inicial state goes up a level

When passing props and states remember:
after render() is when the component will know its final props
so modify what will be show here by mapping over props

to insure correct context object (this) is called with lower level react components use
arrow functions and identifiers
onInteraction={() => method(id)}
