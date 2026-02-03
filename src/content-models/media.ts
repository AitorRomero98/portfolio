/* ============================================================================
 * Media Types
 * ============================================================================
 * Media represents reusable assets (images, videos).
 * Media is referenced by blocks, albums, and other content.
 */

/* --------------------------------------------------------------------------
 * Base
 * -------------------------------------------------------------------------- */

export interface BaseMedia {
  id: string;
  type: MediaType;
  src: string; // relative or absolute path
  createdAt: string;
  alt?: string;
}

/* --------------------------------------------------------------------------
 * Image
 * -------------------------------------------------------------------------- */

export interface ImageMedia extends BaseMedia {
  type: "image";
  width?: number;
  height?: number;
}

/* --------------------------------------------------------------------------
 * Video
 * -------------------------------------------------------------------------- */

export interface VideoMedia extends BaseMedia {
  type: "video";
  poster?: string;
  duration?: number; // seconds
}

/* --------------------------------------------------------------------------
 * Union
 * -------------------------------------------------------------------------- */

export type Media = ImageMedia | VideoMedia;

/* --------------------------------------------------------------------------
 * Media Type Enum
 * -------------------------------------------------------------------------- */

export type MediaType = "image" | "video";
