import { Schema, SchemaType } from "@google/generative-ai";

export function generateSchema<T>(instance: T): Schema {
    const schema: Schema = {};

    for (const key in instance) {
        if (Object.prototype.hasOwnProperty.call(instance, key)) {
            const type = typeof instance[key];
            let schemaType: SchemaType | undefined;
            let itemsSchema: Schema | undefined;

            switch (type) {
                case 'string':
                    schemaType = SchemaType.STRING;
                    break;
                case 'number':
                    if (Number.isInteger(instance[key])) {
                        schemaType = SchemaType.INTEGER;
                    } else {
                        schemaType = SchemaType.NUMBER;
                    }
                    break;
                case 'boolean':
                    schemaType = SchemaType.BOOLEAN;
                    break;
                case 'object':
                    if (Array.isArray(instance[key])) {
                        schemaType = SchemaType.ARRAY;
                        // Handle array items, assuming they are of the same type.
                        if (instance[key].length > 0 && typeof instance[key][0] === 'object' && instance[key][0] !== null) {
                            if (instance[key][0] && typeof instance[key][0].constructor === 'function') {
                                itemsSchema = generateSchema(instance[key][0].constructor as new () => unknown);
                            }
                        } else if (instance[key].length > 0) {
                            const itemType = typeof instance[key][0];
                            if (itemType === 'string' || itemType === 'number' || itemType === 'boolean') {
                                itemsSchema = { type: mapTypeToSchemaType(itemType) };
                            }
                        }
                        if (instance[key] && typeof instance[key].constructor === 'function') {
                            itemsSchema = generateSchema(instance[key].constructor as new () => unknown);
                        }
                        schemaType = SchemaType.OBJECT;
                        itemsSchema = generateSchema(instance[key].constructor as new () => unknown);
                    }
                    break;
                default:
                    // Handle other types or throw an error if needed.
                    console.warn(`Unsupported type: ${type} for property ${key}`);
            }

            if (schemaType) {
                const propertySchema: Schema = { type: schemaType };
                if (itemsSchema) {
                    propertySchema.items = itemsSchema;
                }
                schema.properties = schema.properties || {};
                schema.properties[key] = propertySchema;
            }
        }
    }

    return schema;
}

function mapTypeToSchemaType(type: string): SchemaType | undefined {
    switch (type) {
        case 'string':
            return SchemaType.STRING;
        case 'number':
            return Number.isInteger(type) ? SchemaType.INTEGER : SchemaType.NUMBER;
        case 'boolean':
            return SchemaType.BOOLEAN;
        default:
            return undefined;
    }

}