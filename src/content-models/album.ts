/* ============================================================================
 * Album
 * ============================================================================
 * An Album is an ordered collection of media items.
 */

import type { MediaPost } from "./post";

/* --------------------------------------------------------------------------
 * Album
 * -------------------------------------------------------------------------- */

export interface Album {
  id: string;
  slug: string;

  title?: string;
  description?: string;

  media: MediaPost["source"][];

  createdAt: string;
  updatedAt?: string;
}