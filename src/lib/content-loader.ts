/* ============================================================================
 * Content Loader
 * ============================================================================
 * Loads and validates raw content files into typed domain models.
 */

import type { Post } from "../content-models/post";
import type { Project } from "../content-models/project";
import type { Album } from "../content-models/album";
import type { Media } from "../content-models/media";

/* --------------------------------------------------------------------------
 * Generic loader
 * -------------------------------------------------------------------------- */

async function loadJsonFiles<T>(glob: string): Promise<T[]> {
  const modules = import.meta.glob(glob, { eager: true });

  return Object.values(modules).map((mod: any) => {
    if (!mod.default) {
      throw new Error("Content file missing default export");
    }
    return mod.default as T;
  });
}

/* --------------------------------------------------------------------------
 * Public loaders
 * -------------------------------------------------------------------------- */

export async function loadPosts(): Promise<Post[]> {
  return loadJsonFiles<Post>("/src/content/posts/*.json");
}

export async function loadProjects(): Promise<Project[]> {
  return loadJsonFiles<Project>("/src/content/projects/*.json");
}

export async function loadAlbums(): Promise<Album[]> {
  return loadJsonFiles<Album>("/src/content/albums/*.json");
}

export async function loadMedia(): Promise<Media[]> {
  return loadJsonFiles<Media>("/src/content/media/*.json");
}
