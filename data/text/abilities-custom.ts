export const AbilitiesTextCustom: { [id: IDEntry]: AbilityText } = {
	checkmate: {
		name: "Checkmate",
		desc: "This Pokemon's Normal-type moves become Fighting-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc:
			"This Pokemon's Normal-type moves become Fighting type and have 1.2× power.",
	},
	castling: {
		name: "Castling",
		shortDesc:
			"This Pokémon switches places to take a hit for its ally once per battle.",
		activate: "  {POKEMON} castled to take the hit!",
	},
	detonate: {
		name: "Detonate",
		desc: "This Pokemon's Normal-type moves become Fire-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc:
			"This Pokemon's Normal-type moves become Fire type and have 1.2× power.",
	},
	bloodbattery: {
		name: "Blood Battery",
		shortDesc:
			"This Pokémon gains 1.3× HP from draining/Aqua Ring/Ingrain/Leech Seed/Strength Sap.",
	},
	icyambush: {
		name: "Icy Ambush",
		desc: "If this Pokémon is Cryosect or Stalacmite, the first hit it deals 0 neutral damage. Its trap is then sprung, it changes to Revealed Form, deals damage to both foes, and loses 1/4 of its max HP",
		shortDesc:
			"Cryosect or Stalacmite: The first hit it takes is blocked, it takes 1/4 HP damage instead and damages both foes back slightly.",

		block: "  It sprung the ambush!",
		transform: "{POKEMON}'s true form was revealed!",
	},
	carburization: {
		name: "Carburization",
		desc: "This Pokemon is immune to Fire-type moves and raises its Defense by 1 stage when hit by a Fire-type move. If this Pokemon is not the target of a single-target Fire-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move. If multiple Pokemon could redirect with this Ability, it goes to the one with the highest Speed, or in the case of a tie to the one that has had this Ability active longer.",
		shortDesc:
			"This Pokemon draws Fire moves to itself to raise Def by 1; Fire immunity.",
		activate: "#lightningrod",
	},
};
