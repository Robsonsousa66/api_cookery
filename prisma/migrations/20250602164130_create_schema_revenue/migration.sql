-- CreateTable
CREATE TABLE "Revenues" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_revenue" TEXT NOT NULL,
    "id_material" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "Ingredients_id_material_fkey" FOREIGN KEY ("id_material") REFERENCES "Material" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ingredients_id_revenue_fkey" FOREIGN KEY ("id_revenue") REFERENCES "Revenues" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Material" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
