-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ingredients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_revenue" TEXT NOT NULL,
    "id_material" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" TEXT,
    CONSTRAINT "Ingredients_id_material_fkey" FOREIGN KEY ("id_material") REFERENCES "Material" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ingredients_id_revenue_fkey" FOREIGN KEY ("id_revenue") REFERENCES "Revenues" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Ingredients" ("description", "id", "id_material", "id_revenue", "quantity") SELECT "description", "id", "id_material", "id_revenue", "quantity" FROM "Ingredients";
DROP TABLE "Ingredients";
ALTER TABLE "new_Ingredients" RENAME TO "Ingredients";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
