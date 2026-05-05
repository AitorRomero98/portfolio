/* ============================================================================
 * Post
 * ============================================================================
 * A Post is the atomic, publishable unit of content.
 * Posts appear in feeds and may also be used as Project entries and Album entries.
 */


/* --------------------------------------------------------------------------
 * Visibility:
    -public: everyone can see
    -private: only you can see
    -restricted: restricted to the people you choose
 * -------------------------------------------------------------------------- */

export type PostVisibility = "public" | "private" | "restricted";

/* --------------------------------------------------------------------------
 * Type:
    -text
    -media
 * -------------------------------------------------------------------------- */

export type PostType = "text" | "media";

/* --------------------------------------------------------------------------
 * Post
 * -------------------------------------------------------------------------- */

export interface Post {
  type: PostType;
  id: string;
  slug: string;

  title?: string; 
  tags?: string[];

  visibility: PostVisibility;

  createdAt: string;
  updatedAt?: string;
}

export interface TextPost extends Post{
  type: "text";
  content: string; //Markdown
}
export interface MediaPost extends Post{
  type: "media";
  source: string;
  caption?: string;
}