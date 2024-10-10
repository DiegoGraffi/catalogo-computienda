import {
  text,
  pgTable,
  serial,
  varchar,
  smallint,
  timestamp,
} from "drizzle-orm/pg-core";

export const productos = pgTable("productos", {
  id: serial("id").primaryKey().notNull(),
  codigoInterno: varchar("codigoInterno").notNull().unique(),
  codigoBarra: varchar("codigoBarra"),
  nombre: varchar("nombre").notNull().unique(),
  descripcion: text("descripcion"),
  stock: smallint("stock").notNull(),
  marca: varchar("marca"),
  rubro: varchar("rubro"),
  subRubro: varchar("subRubro"),
  imagenes: text("imagenes"),
  created_at: timestamp("created_at").defaultNow(),
});
