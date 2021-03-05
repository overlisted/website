import { promises } from "fs";

export const getText = async (filename: string): Promise<string> => (await promises.readFile(filename)).toString();
export const getJson = async (filename: string): Promise<unknown> => JSON.parse(await getText(filename));
