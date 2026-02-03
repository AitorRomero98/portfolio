/* ============================================================================
 * Post
 * ============================================================================
 * A Post is the atomic, publishable unit of content.
 * Posts appear in feeds and may also be used as Project entries.
 */

import type { Block } from "./block";

/* --------------------------------------------------------------------------
 * Visibility
 * -------------------------------------------------------------------------- */

export type PostVisibility = "public" | "private";

/* --------------------------------------------------------------------------
 * Post
 * -------------------------------------------------------------------------- */

export interface Post {
  id: string;
  slug: string;

  title?: string;
  blocks: Block[];

  tags: string[];
  visibility: PostVisibility;

  createdAt: string;
  updatedAt?: string;
}