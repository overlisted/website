import { promises } from "fs";

export const getText = async (filename: string) => (await promises.readFile(filename)).toString();
export const getJson = async (filename: string) => JSON.parse(await getText(filename));
