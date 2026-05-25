import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WHATSAPP_NUMBER = "5551998673066";
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar um atendimento de massoterapia. Poderia me informar a disponibilidade?";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
