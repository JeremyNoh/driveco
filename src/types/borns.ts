export interface Born {
  coordonneesXY: [number, number];
  siren_amenageur: number;
  nbre_pdc: number;
  puissance_nominale: number; //Float;
  num_pdl: number;
  prise_type_ef: boolean;
  prise_type_2: boolean;
  prise_type_combo_ccs: boolean;
  prise_type_chademo: boolean;
  prise_type_autre: boolean;
  gratuit: boolean;
  paiement_acte: boolean;
  paiement_cb: boolean;
  paiement_autre: boolean;
  reservation: boolean;
  station_deux_roues: boolean;
  contact_amenageur: string;
  contact_operateur: string;
  nom_enseigne: string;
  id_station_itinerance: string;
  nom_station: string;
  implantation_station: string;
  adresse_station: string;
  code_insee_commune: string;
  id_pdc_itinerance: string;
  condition_acces: string;
  horaires: string;
  accessibilite_pmr: string;
  restriction_gabarit: string;
  raccordement: string;
  date_mise_en_service: string; // date
  date_maj: string; // date
}

export type Borns = Born[];
