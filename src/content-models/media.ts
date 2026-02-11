/* ============================================================================
 * Media Blocks
 * ============================================================================
 * Media represents reusable assets (images, videos).
 * Media is referenced by blocks, albums, and other content.
 */

import type { MediaBlock } from "./block";


/* --------------------------------------------------------------------------
 * Base
 * -------------------------------------------------------------------------- */

export interface BaseMedia extends MediaBlock{
  format: MediaFormat;
}

/* --------------------------------------------------------------------------
 * Image
 * -------------------------------------------------------------------------- */

export interface ImageBlock extends BaseMedia {
  format: "image";
  width?: number;
  height?: number;
}

/* --------------------------------------------------------------------------
 * Video
 * -------------------------------------------------------------------------- */

export interface VideoBlock extends BaseMedia {
  format: "video";
  duration?: number; // seconds
}

/* --------------------------------------------------------------------------
 * Union
 * -------------------------------------------------------------------------- */

export type Media = ImageBlock | VideoBlock;

/* --------------------------------------------------------------------------
 * Media Type Enum
 * -------------------------------------------------------------------------- */

export type MediaFormat = "image" | "video";

export type MediaId = MediaBlock["mediaId"];