export const MovesTextCustom: { [id: IDEntry]: MoveText } = {
	creepingmoss: {
		name: "Creeping Moss",
		desc: "The target becomes Grass type and is prevented from switching out without the use of moves. Fails if the target is already Grass type. The effect ends if either the user or the target leaves the field.",
		shortDesc: "Traps the target and turns them Grass type.",
	},
	skewer: {
		name: "Skewer",
		desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities. This move does not check accuracy.",
		shortDesc: "Always results in a critical hit; no accuracy check.",
	},
	dragonwave: {
		name: "Dragon Wave",
		desc: "Lowers the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
	},
	crosscapture: {
		name: "Cross Capture",
		shortDesc: "Attacking diagonally in a double battle: 1.5× power.",
	},
	plasmaeater: {
		name: "Plasma Eater",
		desc: "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn. If Big Root is held by the recipient, the HP recovered is 1.3× normal, rounded half down. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out or uses Mortal Spin or Rapid Spin successfully, the effect ends.",
		shortDesc: "1/8 of target's HP is restored to user every turn.",
		start: "  {POKEMON} was tapped!",
		end: "  {POKEMON} was freed from Plasma Eater!",
		damage: "  {POKEMON}'s health is sapped by Plasma Eater!",
	},
	blackice: {
		name: "Black Ice",
		desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Fails if the effect is already active on the opposing side. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Ice type; 0.25×, 0.5×, neutral, 2×, or 4×, respectively. Can be removed from the opposing side if any Pokemon uses Tidy Up, or if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
		shortDesc: "Hurts foes on switch-in. Factors Ice weakness.",

		start: "  The ground got slippery around {TEAM}!",
		end: "  The black ice around {TEAM} melted!",
		damage: "  {POKEMON} slipped on the black ice!",
	},
};
