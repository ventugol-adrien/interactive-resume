import { promises as fs } from 'fs'; // Explicitly import the promises API

async function readCsvFile(filePath: string): Promise<string> {
  try {
    const fileContent = await fetch(filePath);
    return fileContent.text();
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    throw error; // Re-throw the error to be handled by the caller
  }
}

// Example usage:
export async function processFile(filePath:string) {
  try {
    const csvData = await readCsvFile(filePath); // Replace './data.csv' with your file path
    console.log(csvData);
    return csvData
  } catch (error) {
    console.error("An error occurred:", error);
  }
}