export const questions = [
	{
		id: "Poste",
		text: "Poste",
		options: [
			{ id: 1, text: "Parking Nord", next: "Q1" },
			{ id: 2, text: "Parking Sud", next: "Q1" },
		],
	},
	{
		id: "Q1",
		text: "La personne ...",
		options: [
			{ id: 1, text: "Monte dans un véhicule", next: "Q2" },
			{ id: 2, text: "Descend d'un véhicule", next: "Q2" },
		],
	},
	{
		id: "Q2",
		text: "Indiquer le nombre de personnes (adultes + enfants) dans le véhicule y compris le conducteur",
		freeText: true,
		next: "Q3",
	},
	{
		id: "Q3",
		text: "Pour quelle raison principale êtes vous garés ici ?",
		options: [
			{ id: 1, text: "Vous prenez ou avez pris le train", next: "Q4" },
			{ id: 2, text: "Vous prenez ou avez pris un bus", next: "Q4" },
			{ id: 3, text: "Vous accompagnez une personne qui prend/va prendre un train", next: "Q4" },
			{ id: 4, text: "Vous venez prendre un renseignement/ acheter un billet en gare ", next: "Q4" },
			{ id: 5, text: "Vous travaillez dans le quartier", next: "Q4" },
			{ id: 6, text: "Vous habitez dans le quartier", next: "Q4" },
			{ id: 7, text: "Vous vous rendez dans un commerce/bureau/service/école... du quartier", next: "Q4" },
			{ id: 8, text: "En 2 roues Motorisé (Moto, scooter...)", next: "Q4" },
			{ id: 9, text: "Vous rendez visite à quelqu'un dans le quartier", next: "Q4" },
		],
	},
	{
		id: "Q4",
		text: "Combien de temps prévoyez-vous de/êtes-vous restés garés ici ? ",
		options: [
			{ id: 1, text: "Moins de  20 minutes", next: "Q5" },
			{ id: 2, text: "Maximum 1h", next: "Q5" },
			{ id: 3, text: "De 1h à 2h", next: "Q5" },
			{ id: 4, text: "De 2h à 4h", next: "Q5" },
			{ id: 5, text: "Toute la journée", next: "Q5" },
			{ id: 6, text: "Plus d'une journée", next: "Q5" },
		],
	},
	{
		id: "Q5",
		text: "Vous stationnez ici, pour le même motif ? ",
		options: [
			{ id: 1, text: "Tous les jours y compris le WE", next: "Q6" },
			{ id: 2, text: "4 à 5 fois par semaine", next: "Q6" },
			{ id: 3, text: "2 à 3 fois  par semaine", next: "Q6" },
			{ id: 4, text: "1 fois par semaine", next: "Q6" },
			{ id: 5, text: "entre 1 fois par semaine et 1 fois par mois", next: "Q6" },
			{ id: 6, text: "Moins souvent", next: "Q6" },
		],
	},
	{
		id: "Q6",
		text: "Quelle est votre commune/quartier de résidence ?",
		options: [
			{ id: 1, text: "Trappes", next: "origine_quartier" },
			{ id: 2, text: "Autre Commune", next: "origine_autre" }
		]
	},
	{
		id: "origine_quartier",
		text: "Précisez le quartier",
		options: [
			{ id: 1, text: "Centre-Ville - Jaurès Gare", next: "end" },
			{ id: 3, text: "Jean Macé", next: "end" },
			{ id: 2, text: "Plaine de Neauphle", next: "end" },
			{ id: 4, text: "Village", next: "end" },
			{ id: 5, text: "Aerostat", next: "end" },
			{ id: 6, text: "Georges Sand Pergaud Verlaine", next: "end" },
			{ id: 7, text: "Les Merisiers- Farges Thorez-Cité Nouvelle", next: "end" },
			{ id: 8, text: "La Boissière", next: "end" },
			{ id: 9, text: "Autre Quartier", next: "end" },

		]
	},
	{
		id: "origine_autre",
		text: "Précisez la commune",
		usesCommuneSelector: true,
		next: "end"
	},
];
