const {
    lexicographicSortSchema,
    buildSchema,
    printSchema,
} = require("graphql");
const fs = require("fs");
const path = require("path");

const schemasToSort = [
    "adminidentityschema.graphql",
    "demandschema.graphql",
    "storefrontschema.graphql",
    "supplyschema.graphql",
];

for (const schemaToSort of schemasToSort) {
    try {
        const filePath = path.join(__dirname, "..", schemaToSort);
        const schema = fs.readFileSync(filePath, {
            encoding: "utf-8",
        });

        const schemaV2 = buildSchema(schema);
        const sortedSchema = printSchema(lexicographicSortSchema(schemaV2));

        fs.writeFileSync(filePath, sortedSchema);
        console.log(`Schema ${schemaToSort} sorted and re-saved`);
    } catch (error) {
        console.error(`Schema ${schemaToSort} errored`, error);
    }
}
