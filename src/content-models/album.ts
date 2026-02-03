/* ============================================================================
 * Album
 * ============================================================================
 * An Album is an ordered collection of media items.
 */

import type { MediaId } from "./media";

/* --------------------------------------------------------------------------
 * Album
 * -------------------------------------------------------------------------- */

export interface Album {
  id: string;
  slug: string;

  title?: string;
  description?: string;

  media: MediaId[];

  createdAt: string;
  updatedAt?: string;
}
