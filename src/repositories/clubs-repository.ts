import { ClubModel } from "../models/club-model";
import fs from "fs/promises";
import path from "path";

const clubsFilePath = path.resolve(__dirname, "../data/clubs.json");

export const findAllClubs = async (): Promise<ClubModel[]> => {
  try {
    const data = await fs.readFile(clubsFilePath, "utf-8");
    const clubs: ClubModel[] = JSON.parse(data);

    if (!Array.isArray(clubs)) {
      throw new Error("Formato inválido de dados no arquivo clubs.json");
    }

    return clubs;
  } catch (error) {
    console.error("Erro ao carregar clubes:", error);
    return []; // Retorna lista vazia como fallback
  }
};
