/* ============================================================================
 * Block Types
 * ============================================================================
 * Blocks are ordered content units that make up a Post or Project entry.
 * They are framework-agnostic and serializable.
 */

/* --------------------------------------------------------------------------
 * Base
 * -------------------------------------------------------------------------- */

export interface BaseBlock {
  id: string;
  type: BlockType;
}

/* --------------------------------------------------------------------------
 * Text
 * -------------------------------------------------------------------------- */

export interface TextBlock extends BaseBlock {
  type: "text";
  content: string; // markdown
}

/* --------------------------------------------------------------------------
 * Image
 * -------------------------------------------------------------------------- */

export interface ImageBlock extends BaseBlock {
  type: "image";
  mediaId: string;
  caption?: string;
}

/* --------------------------------------------------------------------------
 * Video
 * -------------------------------------------------------------------------- */

export interface VideoBlock extends BaseBlock {
  type: "video";
  mediaId: string;
  caption?: string;
}

/* --------------------------------------------------------------------------
 * Gallery
 * -------------------------------------------------------------------------- */

export interface GalleryBlock extends BaseBlock {
  type: "gallery";
  mediaIds: string[];
  caption?: string;
}

/* --------------------------------------------------------------------------
 * Union
 * -------------------------------------------------------------------------- */

export type Block =
  | TextBlock
  | ImageBlock
  | VideoBlock
  | GalleryBlock;

/* --------------------------------------------------------------------------
 * Block Type Enum
 * -------------------------------------------------------------------------- */

export type BlockType =
  | "text"
  | "image"
  | "video"
  | "gallery";
