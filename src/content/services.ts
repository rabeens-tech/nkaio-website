import type { TranslationKey } from "../i18n";

export interface ServiceContent {
  title: TranslationKey;
  intro: TranslationKey;
  note: TranslationKey;
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "/hair": { title: "serviceHairTitle", intro: "serviceHairIntro", note: "serviceHairNote" },
  "/nails": { title: "serviceNailsTitle", intro: "serviceNailsIntro", note: "serviceNailsNote" },
  "/body-and-makeup": { title: "serviceMakeupTitle", intro: "serviceMakeupIntro", note: "serviceMakeupNote" },
  "/esthetic-hair": { title: "serviceEstheticHairTitle", intro: "serviceEstheticHairIntro", note: "serviceEstheticHairNote" },
  "/esthetic-body": { title: "serviceEstheticBodyTitle", intro: "serviceEstheticBodyIntro", note: "serviceEstheticBodyNote" },
  "/psychology": { title: "servicePsychologyTitle", intro: "servicePsychologyIntro", note: "servicePsychologyNote" },
  "/physiotherapy": { title: "servicePhysiotherapyTitle", intro: "servicePhysiotherapyIntro", note: "servicePhysiotherapyNote" },
  "/nutritionist": { title: "serviceNutritionistTitle", intro: "serviceNutritionistIntro", note: "serviceNutritionistNote" },
};

export const SERVICE_STEPS = [
  ["01", "stepOneTitle", "stepOneDescription"],
  ["02", "stepTwoTitle", "stepTwoDescription"],
  ["03", "stepThreeTitle", "stepThreeDescription"],
] as const satisfies readonly (readonly [string, TranslationKey, TranslationKey])[];
