/* ============================================================================
 * Project
 * ============================================================================
 * A Project is a long-lived container for structured progress entries.
 */

import type { Post } from "./post";

/* --------------------------------------------------------------------------
 * Project Entry
 * -------------------------------------------------------------------------- */

export interface ProjectEntry {
  id: string;

  title?: string;
  summary?: string;

  blocks: Post[];

  createdAt: string;
  updatedAt?: string;
}

/* --------------------------------------------------------------------------
 * Project
 * -------------------------------------------------------------------------- */

export interface Project {
  id: string;
  slug: string;

  title: string;
  description?: string;

  entries: ProjectEntry[];

  status?: "active" | "paused" | "completed";

  createdAt: string;
  updatedAt?: string;
}
