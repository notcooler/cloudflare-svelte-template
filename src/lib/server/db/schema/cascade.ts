import type { UpdateDeleteAction } from "drizzle-orm/pg-core"

type T = {
  onUpdate?: UpdateDeleteAction
  onDelete?: UpdateDeleteAction
}

// Helper for defining cascade actions in Drizzle ORM schema
export const cascadeAll = {
  onUpdate: "cascade",
  onDelete: "cascade",
} satisfies T

export const cascadeUpdate = {
  onUpdate: "cascade",
} satisfies T

export const cascadeDelete = {
  onDelete: "cascade",
} satisfies T
