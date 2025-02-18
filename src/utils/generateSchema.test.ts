import { describe, it, expect } from 'vitest';
import { generateSchema } from './generateSchema';
import { Schema, SchemaType } from '@google/generative-ai';

interface TestInterface {
    name: string,
    age: number,
    isActive: boolean,
    tags?: string[],
}

const makeTestInterface = () => {
    return {
        name: "",
        age: 0,
        isActive: false,
        tags: [],
    };
};

describe('generateSchema', () => {
    it('should generate a schema with correct properties and types', () => {
        const expectedSchema: Schema = {
            properties: {
                name: { type: SchemaType.STRING },
                age: { type: SchemaType.INTEGER },
                isActive: { type: SchemaType.BOOLEAN },
            }
        };

        const generatedSchema = generateSchema<TestInterface>(makeTestInterface());

        expect(generatedSchema).toEqual(expectedSchema);
    });
});